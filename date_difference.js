import { formatDistance, format, subDays } from 'date-fns';


// format(new Date(), 'MM/dd/yyyy');
const diff = formatDistance(new Date(), format(new Date(1988, 10, 25), 'MM/dd/yyyy'), { addSuffix: true })
console.log(diff);