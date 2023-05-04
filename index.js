/* Your Code Here */

const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ]

  
function createEmployeeRecord(array){
    
   return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    
}

function createEmployeeRecords(array){
    
    return array.map(createEmployeeRecord)
}

function createTimeInEvent(timeStamp){
    let date = timeStamp.split(" ")[0]
    let time = parseInt(timeStamp.split(" ")[1])

    this.timeInEvents.push({
        type: "TimeIn",
        hour: time,
        date: date
    })
    return this
    
}

function createTimeOutEvent(timeStamp){
    let date = timeStamp.split(" ")[0]
    let time = parseInt(timeStamp.split(" ")[1])

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: time,
        date: date
    })
    return this
}

function hoursWorkedOnDate(timeStamp){
    let hrs = 0

    for(let i = 0; i < this.timeInEvents.length; i++){
        if(this.timeInEvents[i].date === timeStamp){
            hrs = (this.timeOutEvents[i].hour - this.timeInEvents[i].hour) / 100
                
        }
    }
    return hrs
}

function wagesEarnedOnDate(timeStamp){

    return hoursWorkedOnDate.call(this, timeStamp) * this.payPerHour
    
}

function findEmployeeByFirstName(collection, firstNameString){
    let employee

    for(let item of collection){
        if(item === collection[0]){
            employee = item
        }
    }
    return employee
}

function calculatePayroll(employeeRecords){
    let payroll = 0

    for(let employeeRecord of employeeRecords){
        let singleEmployeePay = allWagesFor.call(employeeRecord)
        payroll += singleEmployeePay
    }
    return payroll
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

