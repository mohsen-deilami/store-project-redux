const shortenText= text =>{
    return text.split(" ").slice(0 , 4).join("-");
  }
  export {
    shortenText,
}