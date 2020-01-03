/**
 * 4-connected components algorithm implementation
 * a.k.a Number of Islands
 * 
 * @author Steven Oderayi <oderayi@gmail.com>
 */
function clusters(rows, column, grid)
{
    const labels = {}
    const eqv = []
    let label = 0

    // First pass
    for(i=0; i<rows; i++) {
        for(j=0; j<column; j++) {
            let cell = grid[i][j]
            if (!cell) continue
            let topLabel = labels[`${i}_${j-1}`] || undefined
            let leftLabel = labels[`${i-1}_${j}`] || undefined

            if(!topLabel && !leftLabel) {
                label++
                labels[`${i}_${j}`] = label
            } else if (topLabel || leftLabel) {
                if (topLabel && label !== topLabel) {
                    eqv.push([topLabel, label])
                } else if(leftLabel && leftLabel !== label) {
                    eqv.push([leftLabel, label])
                }
                labels[`${i}_${j}`] = topLabel || leftLabel
            }
        }
    }

    // Second pass
    for(let labelEntry in labels) {
        for(eqvEntry of eqv) {
            if(labels[labelEntry] === eqvEntry[1]) {
                labels[labelEntry] = eqvEntry[0]
            }
        }
    }

    // Count unique labels
    const u = new Set(Object.values(labels))

    console.log(labels, eqv, u.size)

    return u.size
}

// Tests
const data =   [[1, 1, 0, 0, 0], 
                [0, 1, 0, 0, 1], 
                [1, 0, 0, 1, 1], 
                [0, 0, 0, 0, 0], 
                [1, 0, 1, 0, 1]] 
console.log(clusters(data.length, data[0].length, data))

const data2 =   [[1, 0, 0, 0, 0, 0, 0], 
                 [0, 1, 0, 0, 0, 0, 0], 
                 [0, 0, 1, 0, 0, 0, 0], 
                 [0, 0, 0, 1, 0, 0, 0], 
                 [0, 0, 0, 0, 1, 0, 0],
                 [0, 0, 0, 0, 0, 1, 0],
                 [0, 0, 0, 0, 0, 0, 1]] 
console.log(clusters(data2.length, data2[0].length, data2))

const data3 =   [[1, 1, 0, 0], 
                [0, 1, 0, 1], 
                [1, 0, 1, 1], 
                [0, 0, 0, 0], 
                [1, 0, 0, 1]] 
console.log(clusters(data3.length, data3[0].length, data3))

const data4 =   [[1, 1, 1, 1]] 
console.log(clusters(data4.length, data4[0].length, data4))