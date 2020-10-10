// Create Date

const today = new Date(); // Sat Oct 10 2020 20:53:31 GMT+0300 (Восточная Европа, летнее время)

let birthday = new Date("9-8-2001"); // Sat Sep 08 2001 00:00:00 GMT+0300 (Восточная Европа, летнее время)
birthday = new Date("7/4/2002"); // Thu Jul 04 2002 00:00:00 GMT+0300 (Восточная Европа, летнее время)
birthday = new Date("May 7 2005"); // Sat May 07 2005 00:00:00 GMT+0300 (Восточная Европа, летнее время)

let  val;

// Date Methods

val = today.getHours(); // 20
val = today.getMinutes(); // 53
val = today.getSeconds(); // 31
val= today.getMilliseconds(); // 280
val = today.getDate(); // 10
val = today.getDay(); // 6(Saturday)
val = today.getFullYear(); //2020
val = today.getTime(); // 1602352493514 (time Stamp)

val = birthday.setMonth(6); // Thu Jul 07 2005 00:00:00 GMT+0300 (Восточная Европа, летнее время)
val = birthday.setDate(11); //  Mon Jul 11 2005 00:00:00 GMT+0300 (Восточная Европа, летнее время)
val = birthday.setHours(11); //  Mon Jul 11 2005 11:00:00 GMT+0300 (Восточная Европа, летнее время)
val = birthday.setMinutes(11); //  Mon Jul 11 2005 11:11:00 GMT+0300 (Восточная Европа, летнее время)
val = birthday.setSeconds(11); //  Mon Jul 11 2005 11:11:11 GMT+0300 (Восточная Европа, летнее время)
val = birthday.setFullYear(2011); // Mon Jul 11 2011 11:11:11 GMT+0300 (Восточная Европа, летнее время)


console.log(birthday);
