
function rechnen() {
    console.log("rechnen")
    let zvE;
    let ESt;
    let zvE1 = +document.getElementById('zvEinkommen1').value
    let zvE2 = +document.getElementById('zvEinkommen2').value
    let year = document.getElementById('year').value
    console.log('')
    let person1 = document.getElementById('p1')
    let person2 = document.getElementById('p2')
    if (person1.checked) {
        zvE = zvE1
    } else if (person2.checked) {
        zvE = (zvE1 + zvE2) / 2
    }
    console.log(zvE)

    if (year == 2020) {
        console.log(year)
        // Fall 1
        if (zvE <= 9408) {
            ESt = 0
            console.log(ESt)
           
            // Fall 2
        } else if ((zvE >= 9409) && (zvE <= 14532)) {
            let y = (zvE - 9408) / 10000
            ESt = ((972.87 * y) + 1400) * y
            console.log(ESt)
            // Fall 3
        } else if ((14533 <= zvE <= 57051)) {
            let z = (zvE - 14532) / 10000
            ESt = ((212.02 * z) + 2397) * (z) + 972.79
            console.log(ESt)
            // Fall 4
        } else if (57052 <= zvE <= 270500) {
            ESt = 0.42 * (zvE - 8963.74)
            
            // Fall 5
        } else if (zvE >= 270501) {
            ESt = 0.45 * (zvE - 17078.74)
            
        }
        
    }
    if (year == 2019) {
        console.log(year)
        // Fall 1
        if (zvE <= 9168) {
            ESt = 0
            console.log(ESt)
            // Fall 2
        } else if ((zvE >= 9169) && (zvE <= 14254)) {
            let y = (zvE - 9168) / 10000
            ESt = ((980.14 * y) + 1400) * y
            console.log(ESt)
            // Fall 3
        } else if ((14255 <= zvE <= 55960)) {
            let z = (zvE - 14255) / 10000
            ESt = ((216.16 * z) + 2397) * (z) + 965.58
            console.log(ESt)
            // Fall 4
        } else if (55961 <= zvE <= 265326) {
            ESt = 0.42 * (zvE - 8780.90)

            // Fall 5
        } else if (zvE >= 265327) {
            ESt = 0.45 * (zvE - 16740.68)
        }
        
    }
    if (year == 2018) {
        console.log(year)
        // Fall 1
        if (zvE <= 9000) {
            ESt = 0
            console.log(ESt)
            // Fall 2
        } else if ((zvE >= 9001) && (zvE <= 13996)) {
            let y = (zvE - 9000) / 10000
            ESt = ((997.80 * y) + 1400) * y
            console.log(ESt)
            // Fall 3
        } else if ((13997 <= zvE <= 54949)) {
            let z = (zvE - 13996) / 10000
            ESt = ((220.13 * z) + 2397) * (z) + 948.49
            console.log(ESt)
            // Fall 4
        } else if (54950 <= zvE <= 260532) {
            ESt = 0.42 * (zvE - 8621.75)

            // Fall 5
        } else if (zvE >= 260533) {
            ESt = 0.45 * (zvE - 16437.70)
        }
        
        
    }
    if (person1.checked) {
        document.getElementById('ESt').innerHTML = ESt.toFixed(2);
    } else if (person2.checked) {
        document.getElementById('ESt').innerHTML = (ESt * 2).toFixed(2);
    }
}