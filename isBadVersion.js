var solution = function(isBadVersion) {

    return function(n) {
        let high = n
        let low = 1
        while(low < high) {
            let middle = Math.floor(low + (high-low) / 2);
            if (isBadVersion(middle)) {
                high = middle;
                middle = Math.floor((high + low) / 2);
            } else {
                low = middle + 1;
            }
        }
    return low;
    }
};