export default function addDots(number)
    {
        const numberString=number.toString()
        const x = numberString.split('.');
        let x1 = x[0];
        const x2 = x.length > 1 ? '.' + x[1] : '';
        const  rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2'); // changed comma to dot here
        }
        return x1 + x2;
    }