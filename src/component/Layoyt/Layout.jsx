// import React,{useEffect} from "react";
// import Header from "../Header/Header";
// import AboutUs from "../About Us/About Us";
// import Diffrence from "../Diffrence/Diffence";
// import Management  from "../Donate/Management";
// import ContactUs from "../Contact us/Contact";
// import Landing from "../Landing/Landing";
// import Footers from "../Footer/Footers";
// import FAQSection from "../Faq/Faq";
// import Testimonials from "../Testimonial/Testimonial";

// function Layout() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
    
//     <>
//     <div className="">
//     <Header/>
//       <Landing/>
//       <AboutUs/>
//       {/* <Destinations/> */}
//       <Diffrence/>
//       <Management/>
//       <Testimonials/>
//       <FAQSection/>
//       <ContactUs/> 
//       <Footers/>
//       </div>
//     </>
//   );
// }

// export default Layout;
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Sort } from "src/icons/Sort.icon.jsx";
import { Form, Formik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { AutoComplete, DatePicker, Progress, Select, Tooltip } from "antd";
import {
    AppointmentTypesAction,
    getAllPractitionersNames,
    getAppointmentByFilter,
    getAppointmentDetailsByUuidAction,
    getAppointmentsByStatus,
    patientNamesOrgAction,
    sendAppointmentReminders,
    settingsOrgFlag,
} from "src/store/actions/appointment.action";
import { Table } from "../groupComponents";
import { ChatIcon } from "src/icons/Chaticon.icon";
import {
    AddIcon,
    BouncedEmailIcon,
    ClickedIcon,
    CloseIcon,
    DeliveredEmailIcon,
    FailedEmailIcon,
    FailedSmsIcon,
    MenuIcon,
    OpenedEmailIcon,
    OpenedSmsIcon,
    OpenlockIcon,
    SmsIcon,
    UndevliveredSmsIcon,
    VisibilityOffIcon,
    WarningIcon,
} from "src/icons";
import { AddNewAppointment } from "./AddNewAppointment";
import { getAppointmentUuidSlice } from "src/store";
import "moment-timezone";
import { Dropdown, Menu } from "antd";
import { DeleteAppointment } from "./Delete.Appointment";
import { getFromStorage } from "src/lib/storage";
import { Logo } from "../baseComponents";
import { Button } from "src/components/baseComponents";
import { EditAppointment } from "./EditAppointmentPage";
import { LoadingBar } from "../baseComponents/LoadingBar";
import { Bars } from "react-loader-spinner";

const { RangePicker } = DatePicker;

const AppointmentsPage = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const {
        getAppointmentStatusList,
        filteredValue,
        tableLoader,
        apptsTotal
    } = useSelector((state) => state?.appointmentState);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
        analytics.track("Clicked Create New Appointment", {});
    };
    const handleCancel = () => {
        setIsModalOpen(!isModalOpen);
    };
    const handleChatIconClick = (url, event, record) => {
        event.stopPropagation(); // Prevents event propagation to the table row

        if (url) {
            analytics.track("Opened Lumi Chat", {
                appointment_date: record?.appointmentDateTime,
                appointment_id: record?.appointment_id,
                appointment_status: record?.intakeStatus,
                practicioner_name: record?.practitoner_Name,
            });
            window.open(url, "_blank"); // Open the virtual care site URL
        }
    };
    const initialfilterValue = {
        doctorName: "Select Practitioner",
        patientName: "",
        startDate: "",
        endDate: "",
    };
    const initialfilterOptions = {
        doctorNames: [],
        patientNames: [],
    };

    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [filterValue, setFilterValue] = useState(initialfilterValue);
    const [filterOptions, setFilterOptions] = useState(initialfilterOptions);
    const [filteredPatientNames, setFilteredPatientNames] = useState([]);
    const [showNoData, setShowNoData] = useState(false);
    const [isfilterOn, setIsFilterOn] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deleteText, setDeleteText] = useState("");
    const [editAppointmentOpen, setEditAppointmentOpen] = useState(false);
    const [visibleItems, setVisibleItems] = useState([]);
    const [startIndex, setStartIndex] = useState(25);
    const itemsPerPage = 25;

    const handleShowMore = () => {
        setIsLoading(true);
        setStartIndex((prevIndex) => prevIndex + itemsPerPage);
        const endIndex = startIndex + itemsPerPage;
        setVisibleItems((prevItems) => [
            ...prevItems,
            ...filteredData.slice(startIndex, endIndex),
        ]);
    };
    useEffect(() => {
        const currentItems = filteredData.slice(
            itemsPerPage,
            startIndex + itemsPerPage
        );
        setVisibleItems(currentItems);
    }, [filteredData, startIndex]);

    const onChangeHandler = (value, fieldName, dateValue) => {
        if (fieldName === "doctorName") {
            setFilterValue({ ...filterValue, [fieldName]: value });
            const doctorName = filterOptions?.doctorNames?.filter(
                (data) => data.value === value
            )?.[0]?.id;
            const patientName = filterOptions?.patientNames?.filter(
                (data) => data.value === filterValue.patientName
            )?.[0]?.id;
            const startDate = filterValue?.startDate
                ? moment(filterValue.startDate, "MM-DD-YYYY").format(
                      "YYYY-MM-DD"
                  )
                : "";
            const endDate = filterValue?.endDate
                ? moment(filterValue.endDate, "MM-DD-YYYY").format("YYYY-MM-DD")
                : "";
            doctorName &&
                dispatch(
                    getAppointmentByFilter(
                        doctorName,
                        patientName,
                        startDate,
                        endDate,
                        "normal"
                    )
                ) &&
                setIsFilterOn(true);
            if (
                value === "All" &&
                !filterValue.patientName &&
                !filterValue.startDate &&
                !filterValue.endDate
            ) {
                setFilteredData(data);
                setIsFilterOn(false);
            } else if (value === "All") {
                dispatch(
                    getAppointmentByFilter(
                        "",
                        patientName,
                        startDate,
                        endDate,
                        "normal"
                    )
                ) && setIsFilterOn(true);
            }
        } else if (fieldName === "patientName") {
            analytics.track("Entered Patient Name Search", {});
            setFilterValue({ ...filterValue, [fieldName]: value });
            if (value === "") {
                const doctorName = filterOptions?.doctorNames?.filter(
                    (data) => data.value === filterValue.doctorName
                )?.[0]?.id;
                const patientName = "";
                const startDate = filterValue?.startDate
                    ? moment(filterValue.startDate, "MM-DD-YYYY").format(
                          "YYYY-MM-DD"
                      )
                    : "";
                const endDate = filterValue?.endDate
                    ? moment(filterValue.endDate, "MM-DD-YYYY").format(
                          "YYYY-MM-DD"
                      )
                    : "";
                if (
                    doctorName === undefined &&
                    !patientName &&
                    !startDate &&
                    !endDate
                ) {
                    setFilteredData(data);
                    setIsFilterOn(false);
                } else {
                    dispatch(
                        getAppointmentByFilter(
                            doctorName,
                            patientName,
                            startDate,
                            endDate,
                            "normal"
                        )
                    ) && setIsFilterOn(true);
                }
            } else {
                const doctorName = filterOptions?.doctorNames?.filter(
                    (data) => data.value === filterValue.doctorName
                )?.[0]?.id;
                const patientName = filterOptions?.patientNames?.filter(
                    (data) => data.value === value
                )?.[0]?.id;
                const startDate = filterValue?.startDate
                    ? moment(filterValue.startDate, "MM-DD-YYYY").format(
                          "YYYY-MM-DD"
                      )
                    : "";
                const endDate = filterValue?.endDate
                    ? moment(filterValue.endDate, "MM-DD-YYYY").format(
                          "YYYY-MM-DD"
                      )
                    : "";
                patientName &&
                    dispatch(
                        getAppointmentByFilter(
                            doctorName,
                            patientName,
                            startDate,
                            endDate,
                            "normal"
                        )
                    ) &&
                    setIsFilterOn(true);
            }
        } else if (fieldName === "dateRange") {
            const [start, end] = dateValue;
            setFilterValue({
                ...filterValue,
                ["startDate"]: start,
                ["endDate"]: end,
            });
            const startDate = start
                ? moment(start, "MM-DD-YYYY").format("YYYY-MM-DD")
                : "";
            const endDate = end
                ? moment(end, "MM-DD-YYYY").format("YYYY-MM-DD")
                : "";
            const doctorName = filterOptions?.doctorNames?.filter(
                (data) => data.value === filterValue.doctorName
            )?.[0]?.id;
            const patientName = filterOptions?.patientNames?.filter(
                (data) => data.value === filterValue.patientName
            )?.[0]?.id;
            if ((startDate && endDate) || doctorName || patientName) {
                analytics.track("Applied Date Range Filter", {
                    start_date: start,
                    end_date: end,
                });
                dispatch(
                    getAppointmentByFilter(
                        doctorName,
                        patientName,
                        startDate,
                        endDate,
                        "normal"
                    )
                ) && setIsFilterOn(true);
            } else {
                setFilteredData(data);
                setIsFilterOn(false);
            }
        }
    };
    useEffect(() => {
        dispatch(getAppointmentUuidSlice(""));
    }, [dispatch]);

    const uniqueDoctorNames = Array.from(
        new Set(
            filterOptions.doctorNames.map((doctor) => JSON.stringify(doctor))
        )
    ).map((jsonString) => JSON.parse(jsonString));

    const doctor_nameSorter = (a, b) => {
        return a.practitoner_Name.localeCompare(b.practitoner_Name);
    };
    const patient_nameSorter = (a, b) => {
        const lastNameA = a.patient_lastName.toLowerCase();
        const lastNameB = b.patient_lastName.toLowerCase();

        return lastNameA.localeCompare(lastNameB);
    };

    const condition_nameSorter = (a, b) => {
        return a.condition_name.localeCompare(b.condition_name);
    };
    const statusSorter = (a, b) => {
        return a.intakeStatus.localeCompare(b.intakeStatus);
    };

    const parseCustomDate = (dateString) => {
        const dateRegex =
            /(\w{3}) (\d{1,2})(st|nd|rd|th), (\d{4}), (\d{1,2}).(\d{2}) (AM|PM)/;
        const match = dateString.match(dateRegex);

        if (!match) {
            return null; // Invalid date format
        }

        const [, month, day, _, year, hour, minute, ampm] = match;
        const months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const monthIndex = months.indexOf(month);

        let hours = parseInt(hour, 10);
        if (ampm.toLowerCase() === "pm" && hours < 12) {
            hours += 12;
        }
        if (ampm.toLowerCase() === "am" && hours === 12) {
            hours = 0;
        }

        return new Date(year, monthIndex, day, hours, parseInt(minute, 10));
    };

    const customDateTimeSorter = (a, b) => {
        // Assuming a and b are objects with appointmentDateTime property
        const dateA = moment(a.appointmentDateTime.date, "MMM Do, YYYY");
        const dateB = moment(b.appointmentDateTime.date, "MMM Do, YYYY");

        if (dateA.isBefore(dateB)) {
            return -1;
        } else if (dateA.isAfter(dateB)) {
            return 1;
        } else {
            // Dates are equal, compare times
            const timeA = moment(a.appointmentDateTime.time, "h:mm A");
            const timeB = moment(b.appointmentDateTime.time, "h:mm A");

            if (timeA.isBefore(timeB)) {
                return -1;
            } else if (timeA.isAfter(timeB)) {
                return 1;
            } else {
                return 0; // Dates and times are equal
            }
        }
    };

    const onCellClick = (record, rowIndex) => {
        return {
            onClick: (event) => {
                handleRowClick(record, "Cell");
            },
        };
    };

    const columns = [
        {
            title: (
                <>
                    Practitioner Name <Sort className={"sort-icon-doctor"} />
                </>
            ),

            dataIndex: "practitoner_Name",
            key: "practitoner_Name",
            sorter: doctor_nameSorter,
            onCell: onCellClick,
        },
        {
            title: (
                <>
                    Appointment Date & Time{" "}
                    <Sort className={"sort-icon-appointment"} />
                </>
            ),
            dataIndex: "appointmentDateTime",
            key: "appointmentDateTime",
            sorter: customDateTimeSorter,
            onCell: onCellClick,
            render: (text, record) => {
                const textColorClass = record.isExpired
                    ? "expired-appointment-color"
                    : "";
                const { date, time } = text;

                return record.isExpired ? (
                    <Tooltip title="Appointment is expired" placement="top">
                        <div>
                            <span className={textColorClass}>{date}</span>
                            <br />
                            <span className={textColorClass}>{time}</span>
                        </div>
                    </Tooltip>
                ) : (
                    <div>
                        <span className={textColorClass}>{date}</span>
                        <br />
                        <span
                            className={textColorClass}
                            style={{ fontSize: "13px", color: "#777777" }}
                        >
                            {time}
                        </span>
                    </div>
                );
            },
        },
        {
            title: (
                <>
                    Patient Name
                    <Tooltip title="Sort by last name" placement="top">
                        <>
                            <Sort className={"sort-icon-patient"} />
                        </>
                    </Tooltip>
                </>
            ),
            dataIndex: "patient_Name",
            key: "patient_Name",
            sorter: patient_nameSorter,
            render: (text, record) => {
                const nameParts = record?.patient_Name
                    .split('"')
                    .filter((part) => part.trim() !== "");
                return (
                    <div>
                        <div className="icon">
                            <div className="name">{nameParts.join(" ")}</div>
                            {record?.llm_chat_url === null ? (
                                ""
                            ) : (
                                <Tooltip
                                    title="View patient chat"
                                    placement="topLeft"
                                >
                                    <>
                                        <div
                                            className="chat-icon ml-4 "
                                            style={{
                                                transform: "scale(1.2)",
                                                transition: "transform 0.3s",
                                            }}
                                        >
                                            <ChatIcon
                                                onClick={(event) =>
                                                    handleChatIconClick(
                                                        record?.llm_chat_url +
                                                            "?from_care_connect=true",
                                                        event,
                                                        record
                                                    )
                                                }
                                                className="chat-icon"
                                            />
                                        </div>
                                    </>
                                </Tooltip>
                            )}
                        </div>
                        <div className="dob">{record?.dateofBirth}</div>
                    </div>
                );
            },
            onCell: onCellClick,
        },
        {
            title: (
                <>
                    Condition <Sort className={"sort-icon-condition"} />
                </>
            ),
            dataIndex: "condition_name",
            key: "condition_name",
            sorter: condition_nameSorter,
            onCell: onCellClick,
        },
    
        {
            title: (
                <>
                    Intake Status
                    <Sort className={"sort-icon-status"} />
                </>
            ),
            dataIndex: "intakeStatus",
            key: "intakeStatus",
            sorter: statusSorter,
            render: (text, record) => {
                let statusResponseText = "Not Started";
                let statusResponseColor = "new-response";
                let additionalIcon = null;
                if (record?.intakeStatus === "Completed") {
                    statusResponseText = "Completed";
                    statusResponseText = (
                        <div className="icon">
                            Completed
                            <NavLink
                                to={`/schedule/${record?.appt_uuid}`}
                            ></NavLink>
                        </div>
                    );
                    statusResponseColor = "completed-response";
                } else if (record?.intakeStatus === "InProgress") {
                    statusResponseText = (
                        <div className="icon">In Progress</div>
                    );
                    statusResponseColor = "inprogress-response";
                } else if (
                    record?.intakeStatus === "New" &&
                    record?.notification_status?.email
                        ?.patient_intake_reminder === "clicked"
                ) {
                    statusResponseText = "Not Started";
                    statusResponseColor = "new-response";
                    additionalIcon = (
                        <Tooltip title="Email Clicked" placement="topLeft">
                            <ClickedIcon className="chat-icon ml-2" />{" "}
                        </Tooltip>
                    );
                } else if (
                    record?.intakeStatus === "New" &&
                    record?.notification_status?.email
                        ?.patient_intake_reminder === "opened"
                ) {
                    statusResponseText = "Not Started";
                    statusResponseColor = "new-response";
                    additionalIcon = (
                        <Tooltip title="Email Opened" placement="topLeft">
                            {" "}
                            <OpenlockIcon className="chat-icon ml-2" />{" "}
                        </Tooltip>
                    );
                } else if (
                    record?.intakeStatus === "New" &&
                    record?.notification_status?.email
                        ?.patient_intake_reminder === "delivered" &&
                    record?.notification_status?.sms
                        ?.patient_intake_reminder === "delivered"
                ) {
                    statusResponseText = "Not Started";
                    statusResponseColor = "new-response";
                    additionalIcon = (
                        <Tooltip
                            title={
                                <>
                                    <div>
                                        Email:{" "}
                                        {
                                            record?.notification_status?.email
                                                ?.patient_intake_reminder
                                        }
                                    </div>
                                    <div>
                                        Text:{" "}
                                        {
                                            record?.notification_status?.sms
                                                ?.patient_intake_reminder
                                        }
                                    </div>
                                </>
                            }
                            placement="topLeft"
                        >
                            <VisibilityOffIcon className="chat-icon ml-2" />
                        </Tooltip>
                    );
                } else if (
                    (record?.intakeStatus === "New" &&
                        record?.notification_status?.email
                            ?.patient_intake_reminder === "failed") ||
                    record?.notification_status?.email
                        ?.patient_intake_reminder === "bounced" ||
                    record?.notification_status?.sms
                        ?.patient_intake_reminder === "failed"
                ) {
                    statusResponseText = "Not Started";
                    statusResponseColor = "new-response";
                    additionalIcon = (
                        <Tooltip
                            title={
                                <>
                                    <div>
                                        Email:{" "}
                                        {
                                            record?.notification_status?.email
                                                ?.patient_intake_reminder
                                        }
                                    </div>
                                    <div>
                                        {" "}
                                        Text:{" "}
                                        {
                                            record?.notification_status?.sms
                                                ?.patient_intake_reminder
                                        }
                                    </div>
                                </>
                            }
                            placement="topLeft"
                        >
                            <WarningIcon className="chat-icon ml-2" />
                        </Tooltip>
                    );
                } else if (record?.intakeStatus === "Summary InProgress") {
                    statusResponseText = "Summary In Progress";
                    statusResponseColor = "summary-inprogress-response";
                }
                return (
                    <div className="notification-icons">
                        <span className={statusResponseColor}>
                            {statusResponseText}
                        </span>
                        <span>{additionalIcon}</span>
                    </div>
                );
            },
            onCell: onCellClick,
        },
        {
            title: "Actions",
            key: "actions",
            dataIndex: "actions",
            width: "3px",
            render: (text, record) => {
                return (
                    <Dropdown overlay={menuOptions(record?.appt_uuid, record)}>
                        <a
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                        >
                            <MenuIcon />
                        </a>
                    </Dropdown>
                );
            },
        },
    ];

    const handleDeleteOpen = (appt_uuid, record) => {
        setDeleteText(record);
        setIsDeleteOpen(true);
    };

    const handleEditAppointmentModal = (appt_uuid, setFieldValue) => {
        dispatch(
            getAppointmentDetailsByUuidAction(
                appt_uuid,
                setEditAppointmentOpen,
                setFieldValue
            )
        );
    };

    const handleSendReminder = (uuid, record) => {
        analytics.track("Send Intake Reminder", {
            appointment_date: record?.appointmentDateTime,
            appointment_id: record?.appointment_id,
            appointment_status: record?.intakeStatus,
            practicioner_name: record?.practitoner_Name,
        });
        dispatch(sendAppointmentReminders(uuid));
    };

    const handlePatientChatOpen = (url, record) => {
        if (url) {
            analytics.track("Opened Lumi Chat", {
                appointment_date: record?.appointmentDateTime,
                appointment_id: record?.appointment_id,
                appointment_status: record?.intakeStatus,
                practicioner_name: record?.practitoner_Name,
            });
            window.open(url, "_blank"); // Open the virtual care site URL
        }
    };

    const menuOptions = (id, record) => {
        const conditionForReminder = record?.actions;

        return (
            <Menu
                onClick={({ key }) => {
                    if (key === "reminder" && conditionForReminder) {
                        handleSendReminder(id, record);
                    }
                    if (key === "delete") {
                        handleDeleteOpen(id, record);
                    }
                    if (key === "patientChat") {
                        handlePatientChatOpen(
                            record?.llm_chat_url,
                            // event,
                            record
                        );
                    }
                    if (key === "intake") {
                        handleRowClick(record, "Menu");
                    }
                    if (key === "editAppointment") {
                        handleEditAppointmentModal(record?.appt_uuid);
                    }
                }}
            >
                {conditionForReminder && (
                    <Menu.Item key="reminder">
                        <span className="dropdown-text">
                            <span>Send Intake Reminder</span>
                        </span>
                    </Menu.Item>
                )}
                <Menu.Item key="delete">
                    <span className="dropdown-text">
                        <span>Remove Appointment</span>
                    </span>
                </Menu.Item>
                <Menu.Item key="patientChat">
                    <span className="dropdown-text">
                        <span>Open chat as patient</span>
                    </span>
                </Menu.Item>
                <Menu.Item key="intake">
                    <span className="dropdown-text">
                        <span>View Summary</span>
                    </span>
                </Menu.Item>
                <Menu.Item key="editAppointment">
                    <span className="dropdown-text">
                        <span>Edit Appointment</span>
                    </span>
                </Menu.Item>
            </Menu>
        );
    };

    const handleRowClick = (record, type) => {
        if (
            record?.intakeStatus === "Completed" ||
            record?.intakeStatus === "InProgress"
        ) {
            analytics.track("Opened CareConnect Summary", {
                appointment_date: record?.appointmentDateTime,
                appointment_id: record?.appointment_id,
                appointment_status: record?.intakeStatus,
                practicioner_name: record?.practitoner_Name,
            });
            if (type === "Menu") {
                analytics.track("Clicked View Summary Action Menu", {
                    appointment_date: record?.appointmentDateTime,
                    appointment_id: record?.appointment_id,
                    appointment_status: record?.intakeStatus,
                    practicioner_name: record?.practitoner_Name,
                });
            }
            const newTab = window.open(`/schedule/${record?.appt_uuid}`);
        }
    };

    useEffect(() => {
        if (
            getAppointmentStatusList &&
            Array.isArray(getAppointmentStatusList) &&
            getAppointmentStatusList.length > 0
        ) {
            let doctorNames = [
                    {
                        label: "All",
                        value: "All",
                    },
                ],
                patientNames = [];
            let newData = null;
            newData = getAppointmentStatusList.map((list, index) => {
                const practitionerName =
                    list?.practitioner_firstName || list?.practitioner_lastName
                        ? `${list.practitioner_firstName} ${list.practitioner_lastName}`
                        : "N/A";
                const patientName =
                    list?.patient_firstName || list?.patient_lastName
                        ? `${list.patient_firstName} ${list.patient_lastName}`
                        : "N/A";
                !doctorNames.some(
                    (doctor) =>
                        doctor.value ===
                        `${list?.practitioner_title} ${practitionerName.trim()}`
                ) &&
                    doctorNames.push({
                        id: list?.practitioner_id,
                        label: `${
                            list?.practitioner_title
                                ? list?.practitioner_title + ". "
                                : ""
                        }${practitionerName.trim()}`,
                        value: `${
                            list?.practitioner_title
                                ? list?.practitioner_title + ". "
                                : ""
                        }${practitionerName.trim()}`,
                    });
                !patientNames.some(
                    (patient) => patient.value === patientName.trim()
                ) &&
                    patientNames.push({
                        id: patientName.trim(),
                        value: patientName.trim(),
                    });
                return {
                    key: index,
                    practitoner_Name: `${
                        list?.practitioner_title
                            ? list?.practitioner_title + ". "
                            : ""
                    }
                    ${practitionerName.trim()}`,
                    patient_Name: patientName.trim(),
                    appointmentDateTime: {
                        date: list?.start_date
                            ? moment(list?.start_date).format("MMM Do, YYYY")
                            : "N/A",
                        time: list?.start_date
                            ? moment(list?.start_date).format("h:mm A")
                            : "N/A",
                    },
                    dateofBirth: list?.birth_date ? list?.birth_date : "N/A",
                    patient_lastName: list?.patient_lastName,
                    appointment_id: list?.appointment_id,
                    intakeStatus: list?.chat_completion_status,
                    llm_chat_url: list?.llm_chat_url,
                    appt_uuid: list?.appt_uuid,
                    settings: list?.settings,
                    condition_name: list?.condition_name
                        ? list?.condition_name
                        : "N/A",
                    notification_status: list?.notification_status,
                    isExpired: list?.isExpired,
                    actions:
                        list?.settings?.enable_patient_email_notifications ||
                        list?.settings?.enable_patient_sms_notifications,
                };
            });
            if (newData && Array.isArray(newData) && newData.length > 0) {
                setData(newData);
                setFilteredData(newData);

                setFilterOptions({
                    doctorNames,
                    patientNames,
                });
                setFilterValue(initialfilterValue);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    }, [getAppointmentStatusList]);

    useEffect(() => {
        if (
            filteredValue &&
            Array.isArray(filteredValue) &&
            filteredValue.length > 0
        ) {
            let newData = filteredValue.map((list, index) => {
                const practitionerName =
                    list?.practitioner_firstName || list?.practitioner_lastName
                        ? `${list.practitioner_firstName} ${list.practitioner_lastName}`
                        : "N/A";
                const patientName =
                    list?.patient_firstName || list?.patient_lastName
                        ? `${list.patient_firstName} ${list.patient_lastName}`
                        : "N/A";
                return {
                    key: index,
                    practitoner_Name: `${
                        list?.practitioner_title
                            ? list?.practitioner_title + ". "
                            : ""
                    }${practitionerName.trim()}`,
                    patient_Name: patientName.trim(),
                    appointmentDateTime: {
                        date: list?.start_date
                            ? moment(list?.start_date).format("MMM Do, YYYY")
                            : "N/A",
                        time: list?.start_date
                            ? moment(list?.start_date).format("h:mm A")
                            : "N/A",
                    },
                    dateofBirth: list?.birth_date ? list?.birth_date : "N/A",
                    patient_lastName: list?.patient_lastName,
                    appointment_id: list?.appointment_id,
                    intakeStatus: list?.chat_completion_status,
                    llm_chat_url: list?.llm_chat_url,
                    appt_uuid: list?.appt_uuid,
                    condition_name: list?.condition_name
                        ? list?.condition_name
                        : "N/A",
                    notification_status: list?.notification_status,
                    isExpired: list?.isExpired,
                    actions:
                        list?.settings?.enable_patient_email_notifications ||
                        list?.settings?.enable_patient_sms_notifications,
                };
            });
            if (newData && Array.isArray(newData) && newData.length > 0) {
                setFilteredData(newData);
                setIsLoading(false);
            }
        } else {
            setFilteredData([]);
            setIsLoading(false);
        }
    }, [filteredValue]);

    useEffect(() => {
        dispatch(settingsOrgFlag());
        dispatch(AppointmentTypesAction());
        dispatch(getAllPractitionersNames());
        dispatch(patientNamesOrgAction());
    }, [dispatch]);

    const filter_practitioner_id = getFromStorage("filter_practitioner_id");
    const filter_patient_name = getFromStorage("filter_patient_name");
    const filter_startDate = getFromStorage("filter_startDate");
    const filter_endDate = getFromStorage("filter_endDate");
    const storage_condition =
        filter_practitioner_id !== "" ||
        filter_patient_name !== "" ||
        filter_startDate !== "" ||
        filter_endDate !== "";

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                isfilterOn && storage_condition
                    ? dispatch(
                          getAppointmentByFilter(
                              null,
                              null,
                              null,
                              null,
                              "reload"
                          )
                      )
                    : isfilterOn && storage_condition === false
                    ? ""
                    : dispatch(getAppointmentsByStatus(startIndex));
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };
        fetchAppointments();
        const intervalId = setInterval(fetchAppointments, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [isfilterOn, storage_condition, startIndex]);

    useEffect(() => {
        analytics.page();
        analytics.track("Viewed Appointments List", {});
    }, []);

    useEffect(() => {
        setIsLoading(tableLoader);
    }, [tableLoader]);


    return (
        <div className={`page-wrapper appointment-page`}>
            <Formik
                initialValues={{ gender: "" }} // Initial form values
                onSubmit={(values, actions) => {}}
            >
                {({ handleSubmit }) => (
                      <Form onSubmit={handleSubmit}>
                          <div className="flex flex-col sm:flex-row lg:justify-between gap-y-3 sm:gap-x-3  justify-center items-center">
                              <div className="selector  flex justify-center items-center lg:w-1/4">
                                  <div className="">
                                      
                                  </div>
                                      <Select
                                          className="single-select single-select-no"
                                          options={uniqueDoctorNames}
                                          filterOption={(inputValue, option) =>
                                              option.value
                                                  .toLowerCase()
                                                  .indexOf(
                                                      inputValue.toLowerCase()
                                                  ) !== -1
                                          }
                                          value={filterValue?.doctorName || ""}
                                          onChange={(value) => {
                                              analytics.track(
                                                  "Selected Practitioner Filter",
                                                  {
                                                      practitioner_name: value,
                                                  }
                                              );
                                              onChangeHandler(value, "doctorName");
                                          }}
                                          optionFilterProp="label"
                                          showSearch
                                          
                                      />
                              </div>
                              <div className="selector lg:w-1/4">
                                  <AutoComplete
                                      className="single-select single-select-no"
                                      options={
                                          showNoData
                                              ? [
                                                    {
                                                        value: "No data",
                                                        label: "No data",
                                                        disabled: true,
                                                    },
                                                ]
                                              : filteredPatientNames
                                      }
                                      placeholder="Enter Patient Name"
                                      filterOption={false}
                                      style={{ WebkitTextFillColor: "#000" }}
                                      value={filterValue?.patientName || ""}
                                      onChange={(value) => {
                                          setIsFilterOn(true);
                                          // Filter patient names based on user input
                                          const filteredNames =
                                              filterOptions?.patientNames.filter(
                                                  (option) =>
                                                      option.value
                                                          .toLowerCase()
                                                          .includes(
                                                              value.toLowerCase()
                                                          )
                                              );

                                          // Set the showNoData flag if there are no matching names
                                          setShowNoData(
                                              filteredNames.length === 0
                                          );

                                          setFilteredPatientNames(filteredNames);

                                          // If the user tries to select "No data," clear the selection
                                          if (value.toLowerCase() === "no data") {
                                              onChangeHandler("", "patientName");
                                          } else {
                                              onChangeHandler(
                                                  value,
                                                  "patientName"
                                              );
                                          }
                                      }}
                                  />
                              </div>
                              <div className="w-full lg:w-1/3 xl:w-1/5 2xl:w-1/5 ant-picker-range">
                                  <RangePicker
                                      name="dateRange"
                                      placeholderText="MM-DD-YYYY"
                                      style={{ WebkitTextFillColor: "#000" }}
                                      format="MM-DD-YYYY"
                                      value={
                                          filterValue?.startDate &&
                                          filterValue?.endDate
                                              ? [
                                                    moment(
                                                        filterValue.startDate,
                                                        "MM-DD-YYYY"
                                                    ),
                                                    moment(
                                                        filterValue.endDate,
                                                        "MM-DD-YYYY"
                                                    ),
                                                ]
                                              : []
                                      }
                                      onChange={(value, valueString) =>
                                          onChangeHandler(
                                              value,
                                              "dateRange",
                                              valueString
                                          )
                                      }
                                  />
                              </div>

                              <div className="flex justify-center sm:justify-end gap-3 mt-3 sm:mt-0">
                                  <button
                                      className="reset-button"
                                      onClick={() => {
                                          setFilteredData(data);
                                          setIsFilterOn(false);
                                          setFilterValue({
                                              doctorName: "All",
                                              patientName: "",
                                              startDate: "",
                                              endDate: "",
                                          });
                                          analytics.track("Reset Filters", {});
                                      }}
                                  >
                                      Reset
                                  </button>
                            

                              <div className="">
                                  <AddIcon onClick={showModal} />
                                  <AddNewAppointment
                                      isOpen={isModalOpen}
                                      onCancel={handleCancel}
                                      setIsOpen={setIsModalOpen}
                                  />
                              </div>
                              </div>
                          </div>

                          {deleteText && (
                              <div className="">
                                  <DeleteAppointment
                                      isOpen={isDeleteOpen}
                                      onCancel={() => setIsDeleteOpen(false)}
                                      setIsOpen={setIsDeleteOpen}
                                      deleteText={deleteText}
                                  />
                              </div>
                          )}
                          {editAppointmentOpen && (
                              <>
                                  <EditAppointment
                                      isOpen={editAppointmentOpen}
                                      onCancel={() =>
                                          setEditAppointmentOpen(false)
                                      }
                                      setIsOpen={setEditAppointmentOpen}
                                  />
                              </>
                          )}

                          <div className="mt-5 ant-table">
                              <Table
                                  className={"appointment-page-table"}
                                  rowClassName={(record) => {
                                      let rowClass = "";

                                      if (
                                          record?.intakeStatus === "Completed" ||
                                          record?.intakeStatus === "InProgress"
                                      ) {
                                          rowClass = "hoverable-row";
                                      }
                                      if (record?.isExpired) {
                                          rowClass = "expired-row";
                                      }
                                      return rowClass.trim();
                                  }}
                                  data={filteredData}
                                  columns={columns}
                                  items={false}
                                  loading={data === null ? !isLoading : isLoading}
                                  locale={{
                                      emptyText: "No Data",
                                  }}
                              />
                              <div className="flex justify-center items-center mt-4">
                                  <p>
                                      {filteredData.length > 0
                                          ? `Showing ${filteredData.length} of ${apptsTotal} `
                                          : ""}
                                  </p>
                              </div>
                              {filteredData?.length > 0 && (
                                  <div className="flex justify-center items-center ">
                                      <Progress
                                  
                                          percent={
                                              ((startIndex /
                                                  apptsTotal)) *
                                                  
                                              100
                                              
                                          }
                                          status="active"
                                          strokeColor={{ from: '#dafff3', to: '#00D090' }}
                                          showInfo={false}
                                          size="small"
                                          style={{
                                              width: "200px",
                                              height: "2px",
                                          }}
                                      />
                                  </div>
                              )}
                              <div className=" flex justify-center items-center p-4 mt-2">
                                  {filteredData?.length > 0  && filteredData.length >= itemsPerPage &&
                                  (
                                      <button
                                          onClick={handleShowMore}
                                          className="show-more-button bg-[#00D090] rounded-full hover:bg-[#059669] text-white font-semibold  p-2 py-2 px-16"
                                      >
                                          {data?.length !== startIndex && (
                                              <Bars
                                                  height="25"
                                                  width="25"
                                                  color="#ffffff"
                                                  ariaLabel="bars-loading"
                                                  wrapperStyle={{}}
                                                  wrapperClass=" justify-center"
                                                  visible={true}
                                              />
                                          )}
                                          {data?.length !== startIndex
                                              ? ""
                                              : "Show More"}
                                      </button>
                                  )}
                              </div>
                          </div>
                      </Form>
                )}
            </Formik>
        </div>
    );
};

export default AppointmentsPage;

