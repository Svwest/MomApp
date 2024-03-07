export const formatDate=(date)=>{
    const day = date.getDate().toString()
    const month = (date.getMonth()+1).toString()
    const year = date.getFullYear().toString()
    return (day+'/'+month+'/'+year)
   }
   
   