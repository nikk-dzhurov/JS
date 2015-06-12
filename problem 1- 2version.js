function solve(params) {
    var s = params[0],
        result;
    s = s.split(' ');

    var len = s.length,
        i,
        j,
        indexes = [],
         maxRocks,
        currentRocks;
    indexes[0] = 0;
       
    for (i = 1, j = 1; i < len - 1; i += 1) {
        if (+s[i] > +s[i + 1] && +s[i] > +s[i - 1]) {
            
            indexes[j] = i;
            j += 1;
        }
    }
    indexes[j] = i;

    maxRocks = Number.MIN_VALUE;
    for (i = 0, len = indexes.length; i < len - 1; i += 1) {
        currentRocks =  indexes[i + 1] - indexes[i] ;
        if (maxRocks < currentRocks) {
            maxRocks = currentRocks;
        }
    }
    console.log(maxRocks);
}