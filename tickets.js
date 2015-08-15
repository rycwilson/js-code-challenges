console.log(tickets([ 25, 25, 25, 25, 50, 100, 50 ] ));

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
    var corrChange = correctChange();
    if (change > cashTotal) return "NO";
    // correctChange returns an array of objects:

    else if (change === 0) {
      addToRegister(billTendered);
    }
    else if (corrChange = correctChange()) {
      addToRegister(billTendered);
      removeFromRegister(corrChange);
    }
    else return "NO";
  }
  return "YES";

  function addToRegister (bill) {
    var billTray = cashRegister.filter(function (tray) {
                     return bill === tray.denomination;
                   })[0];
    billTray.count++;
    cashTotal += bill;
  }

  // changeBills is an array of objects:
  // [{denomination: x, count: y}, {denomination: w, count: z}]
  function removeFromRegister (changeBills) {
    var billTray;
    changeBills.forEach(function (bill) {
      billTray = cashRegister.filter(function (tray) {
                       return bill.denomination === tray.denomination;
                     })[0];
      billTray.count -= bill.count;
      cashTotal -= bill.denomination * bill.count;
    });
  }

  // returns an array of objects:
  // [{denomination: w, count: x}, {denomination: y, count: z}]
  function correctChange () {
    // to make change, start looking at the next bill smaller
    // than the bill tendered
    var startIndex, cashCount = 0, changeBills = [];
    for (var i = 0; i < cashRegister.length; i++) {
      if (cashRegister[i].denomination === billTendered) {
        startIndex = i + 1;
      }
    }
    for (var i = startIndex; i < cashRegister.length; i++) {
      for (var j = 1; j <= cashRegister[i].count; j++) {
        cashCount += cashRegister[i].denomination;
        if (cashCount > change) {
          // put the last one back
          cashCount -= cashRegister[i].denomination;
          // save what you've grabbed so far
          changeBills.push({denomination: cashRegister[i].denomination, count: j - 1});
          break;
        }
        if (cashCount === change) {
          changeBills.push({denomination: cashRegister[i].denomination, count: j});
          return changeBills;
        }
      }
    }
    return null;
  }

}