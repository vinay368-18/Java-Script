let day = "monday";

switch (day) {
    case "monday":
        console.log("4am");
        break;
    case "tuesday":
        console.log("5am");
        break;
    case "wednesday":
        console.log("7am")
        break;
    case "thursday":
    case "friday":
        console.log("8am")
        break;
    case "saturday":
    case "sunday":
        console.log("9am")
        break;
    default:
        console.log("Invalid day")
}