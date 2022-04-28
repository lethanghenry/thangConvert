import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  
  display="";

  constructor(private http:HttpClient)
  {
  }
  
  // Convert from string to Base 64
  onConvertStringToBase64(data:any)
  {
    console.log(data.inputValue);

    return this.http.post('https://localhost:44377/api/Home/ConvertFromStringToBase64?input='+data.inputValue,
    null,{responseType:'text'})
    .subscribe((res)=>  
    {
      this.display=res;
    })
  }

 // Convert from string to Byte Array
 onConvertStringToByte(data:any)
 {
   console.log(data.inputValue);
   return this.http.post('https://localhost:44377/api/Home/ConvertFromStringToByte?input='+data.inputValue,
   null,{responseType:'text'})
   .subscribe((res)=>  
   {
     this.display=res;
   })
 }

  // Convert from string to Hex
  onConvertStringToHex(data:any)
  {
    console.log(data.inputValue);
    return this.http.post('https://localhost:44377/api/Home/ConvertFromStringToHex?input='+data.inputValue,
    null,{responseType:'text'})
    .subscribe((res)=>  
    {
      this.display=res;
    })
  }

   // Convert from Byte To String
   onConvertByteToString(data:any)
   {
     console.log(data.inputValue);
     return this.http.post('https://localhost:44377/api/Home/ConvertFromByteToString?input='+data.inputValue,
     null,{responseType:'text'})
     .subscribe((res)=>  
     {
       this.display=res;
     })
   }

  // Convert from Byte To Hex
  onConvertByteToHex(data:any)
  {
    console.log(data.inputValue);
    return this.http.post('https://localhost:44377/api/Home/ConvertFromByteToHex?input='+data.inputValue,
    null,{responseType:'text'})
    .subscribe((res)=>  
    {
      this.display=res;
    })
  }

  // Convert from Byte To Base64
  onConvertByteToBase64(data:any)
  {
    console.log(data.inputValue);
    return this.http.post('https://localhost:44377/api/Home/ConvertFromByteToBase64?input='+data.inputValue,
    null,{responseType:'text'})
    .subscribe((res)=>  
    {
      this.display=res;
    })
  }

// Convert from Hex to string
     onConvertHexToString(data:any)
     {
       console.log(data.inputValue);
       return this.http.post('https://localhost:44377/api/Home/ConvertFromHexToString?input='+data.inputValue,
       null,{responseType:'text'})
       .subscribe((res)=>  
       {
         this.display=res;
       })
     }

// Convert from Hex to byte
onConvertHexToByte(data:any)
{
  console.log(data.inputValue);
  return this.http.post('https://localhost:44377/api/Home/ConvertFromHexToByte?input='+data.inputValue,
  null,{responseType:'text'})
  .subscribe((res)=>  
  {
    this.display=res;
  })
}

// Convert from Hex to byte
onConvertHexToBase64(data:any)
{
  console.log(data.inputValue);
  return this.http.post('https://localhost:44377/api/Home/ConvertFromHexToBase64?input='+data.inputValue,
  null,{responseType:'text'})
  .subscribe((res)=>
  {
    this.display=res;
  })
}

// Convert from Base64 to string
onConvertBase64ToString(data:any)
{
  console.log(data.inputValue);
  return this.http.post('https://localhost:44377/api/Home/ConvertFromBase64ToString?input='+data.inputValue,
  null,{responseType:'text'})
  .subscribe((res)=>  
  {
    this.display=res;
  })
}

// Convert from Base64 to Byte
onConvertBase64ToByte(data:any)
{
  console.log(data.inputValue);
  return this.http.post('https://localhost:44377/api/Home/ConvertFromBase64ToByte?input='+data.inputValue,
  null,{responseType:'text'})
  .subscribe((res)=>  
  {
    this.display=res;
  })
}

// Convert from Base64 to Hex
onConvertBase64ToHex(data:any)
{
  console.log(data.inputValue);
  return this.http.post('https://localhost:44377/api/Home/ConvertFromBase64ToHex?input='+data.inputValue,
  null,{responseType:'text'})
  .subscribe((res)=>  
  {
    this.display=res;
  })
}

}
