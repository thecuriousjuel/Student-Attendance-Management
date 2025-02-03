export function createAttendanceSheet(listOfstudentNames) {
    let rows = '';
    for (const student of listOfstudentNames) {
        rows += `
        <tr>
            <td>${student}</td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
            <td><input type="checkbox"></td>
        </tr>`
    }
    return (`
    <table>
        <thead>
            <tr>
                <th>Student Name</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
        </thead>
        <tbody>
            ${rows}
        </tbody>
    </table>
    `);
}

// const out = createAttandanceSheet(["John Doe", "Jane Smith", "David Lee", "Jane Smith"])
// console.log(out)
