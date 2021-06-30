// export const gacha1 = () => {

//     var num_of_pulls_taken = 0
//     var num_of_five_stars = 0

//     while (num_of_five_stars === 0) {
//         const allNumbers = []

//         let pullIndex = Math.floor(Math.random() * 1000)

//         // If 0.6% hit
//         if (pullIndex < 6)
//         {
//             num_of_five_stars++
//         }
        
//         // If no such luck
//         else
//         {
//             // If Hard Pity Reached
//             if (num_of_pulls_taken === 89)
//             {
//                 num_of_pulls_taken++
//                 num_of_five_stars++
//             }

//             // If Hard Pity not reached
//             else
//             {
//                 num_of_pulls_taken++
//             }
//         }
//     }

//     return { num_of_pulls_taken }

// }

export const gacha1 = () => {
    const allNumbers = [600, 596, 592, 591, 586, 582, 579, 575, 571, 568, 565, 561, 558, 554, 552, 549, 545, 541, 539, 536, 531, 528, 525, 523, 519, 517, 513, 511, 507, 503, 501, 498, 495, 491, 489, 486, 483, 480, 477, 475, 471, 469, 467, 464, 461, 457, 456, 453, 448, 447, 445, 442, 439, 437, 434, 430, 428, 426, 423, 420, 418, 416, 413, 410, 408, 406, 404, 401, 399, 396, 393, 392, 388, 387, 384, 20627, 13946, 9429, 6375, 4306, 2914, 1970, 1332, 901, 608, 411, 278, 187, 126, 266]

    var num_of_pulls_taken = 0
    var num_of_five_stars = 0

    for (let i = 0; i < 90; i++) {

        while (num_of_five_stars === 0)
        {
            let pullIndex = Math.floor(Math.random() * 100000)

            // If 5*
            if (pullIndex < allNumbers[i])
            {
                num_of_five_stars++
            }

            // If no such luck
            else
            {
                // If Hard Pity Reached
                if (num_of_pulls_taken === 89)
                {
                    num_of_pulls_taken++
                    num_of_five_stars++
                }

                // If Hard Pity not reached
                else
                {
                    num_of_pulls_taken++
                }
            }
        }

    }
    
    return { num_of_pulls_taken }

}

export const gacha2 = () => {

    var num_of_five_stars = 0
    var num_of_four_stars = 0
    var num_of_three_stars = 0

    for (let i = 0; i < 10; i++) {
        let pullIndex = Math.floor(Math.random() * 1000)

        // If 5*
        if (pullIndex < 6)
        {
            num_of_five_stars++
        }

        // If 4*
        else if (pullIndex >= 6 && pullIndex < 56)
        {
            num_of_four_stars++
        }

        // If no such luck (3*)
        else
        {
            // 4* pity
            if (i === 9 && num_of_four_stars === 0) 
            {
                num_of_four_stars++
            }

            else
            {
                num_of_three_stars++
            }
        }
    }

    return { num_of_five_stars, num_of_four_stars, num_of_three_stars }

}

export const gacha3 = () => {

    let pullIndex = Math.floor(Math.random() * 1000)

    // If 5*
    if (pullIndex < 6)
    {
        return "5*"
    }
    
    // If 4*
    else if (pullIndex >= 6 && pullIndex < 56)
    {
        return "4*"
    }

    // Else 3*
    else
    {
        return "3*"
    }

}