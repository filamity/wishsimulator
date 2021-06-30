export const gacha1 = () => {

    var num_of_pulls_taken = 0
    var num_of_five_stars = 0

    while (num_of_five_stars === 0) {
        let pullIndex = Math.floor(Math.random() * 1000)

        // If 0.6% hit
        if (pullIndex < 6)
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
        if (pullIndex >= 6 && pullIndex < 56)
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