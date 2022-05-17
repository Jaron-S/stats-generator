const uniformDist = async (params, multiplicity) => {
    let data = [];
    for (let i=0; i < multiplicity; i++) {
        let num = Math.random();
        num *= params.max - params.min; // stretch to fill range
        num += params.min; // offset to min
        data.push(num);
    }
    return data;
}


const normalDist = async (params, multiplicity) => {
    
    // generates a value with normal distribution using Box-Muller transform
    function randomNormal(min, max, skew) {
        let u = 0, v = 0;
        while(u === 0) u = Math.random(); // convert [0,1) to (0,1)
        while(v === 0) v = Math.random();
        let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
        num = num / 10.0 + 0.5; // translate to 0 -> 1

        // resample if out of range (< 0.2% chance)
        if (num > 1 || num < 0) {
          num = randomNormal(min, max, skew);
        }
        // adjust to input parameters
        else {
          num = Math.pow(num, skew); // skew
          num *= max - min; // stretch to fill range
          num += min; // offset to min
        }
        return num;
    }

    // generate the data points
    let data = [];
    for (let i=0; i < multiplicity; i++) {
        data.push(randomNormal(params.min, params.max, params.alpha));
    }
    return data;
}

export { normalDist, uniformDist }