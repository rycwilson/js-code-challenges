
console.log(tickets([ 25, 50, 25, 100, 25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100 ] ));

function tickets (peopleInLine) {
  // using an array of objects because:
  // 1 - correctChange() (see below) needs to iterate through
  // register looking at largest denominations first.  Managing order
  // easier with an array
  // 2 - need a numerical reference to the denomination, as well as
  // a count of the number of bills, hence an object to store those properties
  var cashRegister = [{denomination: 100, count: 0},
                      {denomination: 50, count: 0},
                      {denomination: 25, count: 0}];
  var cashTotal = 0;

  for (var i = 0; i < peopleInLine.length; i++) {
    var billTendered = peopleInLine[i];
    var change = billTendered - 25;
    // correctChange returns an array of objects:
    // [{denomination: w, count: x}, {denomination: y, count: z}, ... ]
    // or null if correct change can't be made
    var corrChange = correctChange();
    if (change > cashTotal) {
      return "NO";
    }
    else if (change === 0) {
      addToRegister(billTendered);
    }
    else if (corrChange) {
      addToRegister(billTendered);
      removeFromRegister(corrChange);
    }
    else return "NO";
  }
  return "YES";

  function addToRegister (bill) {
    var billTray = findTray(bill);
    billTray.count++;
    cashTotal += bill;
  }

  // changeBills is an array of objects:
  // [{denomination: x, count: y}, {denomination: w, count: z}, ... ]
  function removeFromRegister (changeBills) {
    changeBills.forEach(function (bill) {
      var billTray = findTray(bill.denomination);
      billTray.count -= bill.count;
      cashTotal -= bill.denomination * bill.count;
    });
  }

  // locate the correct cash register tray for a given bill
  function findTray (bill) {
    for (var i = 0; i < cashRegister.length; i++) {
      if (cashRegister[i].denomination === bill) {
        return cashRegister[i];
      }
    }
  }

  // returns an array of objects:
  // [{denomination: w, count: x}, {denomination: y, count: z}, ... ]
  function correctChange () {
    // to make change, start looking at the next bill smaller
    // than the bill tendered
    var startIndex, cashCount = 0, changeBills = [];
    for (var i = 0; i < cashRegister.length; i++) {
      if (cashRegister[i].denomination === billTendered) {
        startIndex = i + 1;
      }
    }
    // go through each tray in the register, collecting bills until
    // you've either made change or need to move to the next tray
    // to make change
    for (var i = startIndex; i < cashRegister.length; i++) {
      for (var j = 1; j <= cashRegister[i].count; j++) {
        cashCount += cashRegister[i].denomination;
        if (cashCount > change) {
          // too much
          // save what you've grabbed so far, assuming you grabbed anything
          if (j > 1) {
            changeBills.push({denomination: cashRegister[i].denomination, count: j - 1});
          }
          break;
        }
        if (cashCount === change) {  // success: update changeBills and return
          if (j > 1) {
            changeBills[changeBills.length - 1].count++;
          }
          else {
            changeBills.push({denomination: cashRegister[i].denomination, count: j});
          }
          return changeBills;
        }
        // cashCount is less than change; update cash grabbed and continue iterating
        if (j > 1) {
          changeBills[changeBills.length - 1].count++;
        }
        else {
          changeBills.push({denomination: cashRegister[i].denomination, count: j});
        }
      }
    }
    return null;
  }
}