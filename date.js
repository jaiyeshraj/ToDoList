
exports.getDate = function getDate(){
const today= new Date();
const options={
 weekday: "long",
 day: "numeric",
 month: "long",
};
return today.toLocaleString("en-us",options);
}
exports.getDay= function getDay(){
  const options={
   weekday: "long",
  };
  return today.toLocaleString("en-us",options);
}
