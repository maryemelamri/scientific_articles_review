
import axios from "axios";
const text_to_check =
  "Le dragon est une créature légendaire représentée comme une sorte de gigantesque reptile, ailes déployées et pattes armées de griffes.";
  var percent= ""
//if(text_to_check !== null ){
 
// const burp0_url = "https://papersowl.com:443/plagiarism-checker-send-data";

// const burp0_cookies = {
//   PHPSESSID: "qjc72e3vvacbtn4jd1af1k5qn1",
//   first_interaction_user:"%7B%22referrer%22%3A%22https%3A%5C%2F%5C%2Fwww.google.com%5C%2F%22%2C%22internal_url%22%3A%22%5C%2Ffree-plagiarism-checker%22%2C%22utm_source%22%3Anull%2C%22utm_medium%22%3Anull%2C%22utm_campaign%22%3Anull%2C%22utm_content%22%3Anull%2C%22utm_term%22%3Anull%2C%22gclid%22%3Anull%2C%22msclkid%22%3Anull%2C%22adgroupid%22%3Anull%2C%22targetid%22%3Anull%2C%22appsflyer_id%22%3Anull%2C%22appsflyer_cuid%22%3Anull%2C%22cta_btn%22%3Anull%7D",
//   first_interaction_order:"%7B%22referrer%22%3A%22https%3A%5C%2F%5C%2Fwww.google.com%5C%2F%22%2C%22internal_url%22%3A%22%5C%2Ffree-plagiarism-checker%22%2C%22utm_source%22%3Anull%2C%22utm_medium%22%3Anull%2C%22utm_campaign%22%3Anull%2C%22utm_content%22%3Anull%2C%22utm_term%22%3Anull%2C%22gclid%22%3Anull%2C%22msclkid%22%3Anull%2C%22adgroupid%22%3Anull%2C%22targetid%22%3Anull%2C%22appsflyer_id%22%3Anull%2C%22appsflyer_cuid%22%3Anull%2C%22cta_btn%22%3Anull%7D", 
//   affiliate_user: "a%3A3%3A%7Bs%3A9%3A%22affiliate%22%3Bs%3A9%3A%22papersowl%22%3Bs%3A6%3A%22medium%22%3Bs%3A9%3A%22papersowl%22%3Bs%3A8%3A%22campaign%22%3Bs%3A9%3A%22papersowl%22%3B%7D", 
//   sbjs_migrations: "1418474375998%3D1", 
//   sbjs_current_add: "fd%3D2022-05-24%2019%3A01%3A22%7C%7C%7Cep%3Dhttps%3A%2F%2Fpapersowl.com%2Ffree-plagiarism-checker%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F",
//   sbjs_first_add: "fd%3D2022-05-24%2019%3A01%3A22%7C%7C%7Cep%3Dhttps%3A%2F%2Fpapersowl.com%2Ffree-plagiarism-checker%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F",
//   sbjs_current: "typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29", 
//   sbjs_first: "typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29", 
//   sbjs_udata: "vst%3D1%7C%7C%7Cuip%3D%28none%29%7C%7C%7Cuag%3DMozilla%2F5.0%20%28Windows%20NT%206.3%3B%20Win64%3B%20x64%3B%20rv%3A100.0%29%20Gecko%2F20100101%20Firefox%2F100.0", 
//   sbjs_session: "pgs%3D1%7C%7C%7Ccpg%3Dhttps%3A%2F%2Fpapersowl.com%2Ffree-plagiarism-checker", 
//   _ga_788D7MTZB4: "GS1.1.1653411683.1.0.1653411683.0",
//   _ga: "GA1.1.1828699233.1653411683", 
//   trustedsite_visit: "1",
//   trustedsite_tm_float_seen: "1",
//   AppleBannercookie_hide_header_banner: "1",
//   COOKIE_PLAGIARISM_CHECKER_TERMS: "1", 
//   plagiarism_checker_progress_state: "1"
//   // Add other required cookies here...
// };

// const burp0_headers = {
//   "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0",
//   "Accept": "*/*", 
//   "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3", 
//   "Accept-Encoding": "gzip, deflate",
//   "Referer": "https://papersowl.com/free-plagiarism-checker", 
//   "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", 
//   "X-Requested-With": "XMLHttpRequest",
//   "Origin": "https://papersowl.com", 
//   "Dnt": "1", "Sec-Fetch-Dest": "empty",
//   "Sec-Fetch-Mode": "no-cors", 
//   "Sec-Fetch-Site": "same-origin",
//   "Pragma": "no-cache", 
//   "Cache-Control": "no-cache", "Te": "trailers", 
//   "Connection": "close"
 
// };
   
   


// const burp0_data = {
//   is_free: "false",
//   plagchecker_locale: "en",
//   product_paper_type: "1",
//   title: '',
//   text: text_to_check
// };
// axios.post(burp0_url, burp0_data, {
//       headers: burp0_headers,
//       withCredentials: true,
//       params: burp0_cookies,
//     //cookies: burp0_cookies,
//     }).then((response) => {
//        result = response.data;
//         percent = ""+ result["words_count"];
  
//       console.log("\n[!] Word count : " + result["result_percent"]);
//       console.log("\n[!] Word count : " + result["words_count"]);
//       console.log(
//         "\n[!] Turnitin index : " + (100 - parseFloat(result.percent))
//       );
//       result["matches"].forEach((element: string) => {
//         console.log("\n[!] Matches : " + JSON.stringify(element));
//       });
//       console.log("\n Matches : wtfffffffffffffff" );
//       result["matches"].forEach((element: any) => {
//         console.log("\n[!] Matches : " + JSON.stringify(element));
//       });
      
//       console.log("\n[!] Matches : " + result["matches"]);
//       console.log("percent1"+percent)
//     })
//     .catch((error) => {
//       console.error("An error occurred:", error);
//     });
//     console.log("percent"+percent)
 // }

// Call the function to make the plagiarism check();
// export  {text_to_check, percent,result}





const makePlagiarismCheck = async () => {

const burp0_url = "https://papersowl.com:443/plagiarism-checker-send-data";

const burp0_cookies = {
  PHPSESSID: "qjc72e3vvacbtn4jd1af1k5qn1",
  first_interaction_user:"%7B%22referrer%22%3A%22https%3A%5C%2F%5C%2Fwww.google.com%5C%2F%22%2C%22internal_url%22%3A%22%5C%2Ffree-plagiarism-checker%22%2C%22utm_source%22%3Anull%2C%22utm_medium%22%3Anull%2C%22utm_campaign%22%3Anull%2C%22utm_content%22%3Anull%2C%22utm_term%22%3Anull%2C%22gclid%22%3Anull%2C%22msclkid%22%3Anull%2C%22adgroupid%22%3Anull%2C%22targetid%22%3Anull%2C%22appsflyer_id%22%3Anull%2C%22appsflyer_cuid%22%3Anull%2C%22cta_btn%22%3Anull%7D",
  first_interaction_order:"%7B%22referrer%22%3A%22https%3A%5C%2F%5C%2Fwww.google.com%5C%2F%22%2C%22internal_url%22%3A%22%5C%2Ffree-plagiarism-checker%22%2C%22utm_source%22%3Anull%2C%22utm_medium%22%3Anull%2C%22utm_campaign%22%3Anull%2C%22utm_content%22%3Anull%2C%22utm_term%22%3Anull%2C%22gclid%22%3Anull%2C%22msclkid%22%3Anull%2C%22adgroupid%22%3Anull%2C%22targetid%22%3Anull%2C%22appsflyer_id%22%3Anull%2C%22appsflyer_cuid%22%3Anull%2C%22cta_btn%22%3Anull%7D", 
  affiliate_user: "a%3A3%3A%7Bs%3A9%3A%22affiliate%22%3Bs%3A9%3A%22papersowl%22%3Bs%3A6%3A%22medium%22%3Bs%3A9%3A%22papersowl%22%3Bs%3A8%3A%22campaign%22%3Bs%3A9%3A%22papersowl%22%3B%7D", 
  sbjs_migrations: "1418474375998%3D1", 
  sbjs_current_add: "fd%3D2022-05-24%2019%3A01%3A22%7C%7C%7Cep%3Dhttps%3A%2F%2Fpapersowl.com%2Ffree-plagiarism-checker%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F",
  sbjs_first_add: "fd%3D2022-05-24%2019%3A01%3A22%7C%7C%7Cep%3Dhttps%3A%2F%2Fpapersowl.com%2Ffree-plagiarism-checker%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F",
  sbjs_current: "typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29", 
  sbjs_first: "typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29", 
  sbjs_udata: "vst%3D1%7C%7C%7Cuip%3D%28none%29%7C%7C%7Cuag%3DMozilla%2F5.0%20%28Windows%20NT%206.3%3B%20Win64%3B%20x64%3B%20rv%3A100.0%29%20Gecko%2F20100101%20Firefox%2F100.0", 
  sbjs_session: "pgs%3D1%7C%7C%7Ccpg%3Dhttps%3A%2F%2Fpapersowl.com%2Ffree-plagiarism-checker", 
  _ga_788D7MTZB4: "GS1.1.1653411683.1.0.1653411683.0",
  _ga: "GA1.1.1828699233.1653411683", 
  trustedsite_visit: "1",
  trustedsite_tm_float_seen: "1",
  AppleBannercookie_hide_header_banner: "1",
  COOKIE_PLAGIARISM_CHECKER_TERMS: "1", 
  plagiarism_checker_progress_state: "1"
  // Add other required cookies here...
};

const burp0_headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0",
  "Accept": "*/*", 
  "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3", 
  "Accept-Encoding": "gzip, deflate",
  "Referer": "https://papersowl.com/free-plagiarism-checker", 
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", 
  "X-Requested-With": "XMLHttpRequest",
  "Origin": "https://papersowl.com", 
    "Dnt": "1", "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "no-cors", 
  "Sec-Fetch-Site": "same-origin",
  "Pragma": "no-cache", 
  "Cache-Control": "no-cache", "Te": "trailers", 
  "Connection": "close"
 
};


const burp0_data = {
  is_free: "false",
  plagchecker_locale: "en",
  product_paper_type: "1",
  title: '',
    text: "Le dragon est une créature légendaire représentée comme une sorte de gigantesque reptile, ailes déployées et pattes armées de griffes."
};
 const performPlagiarismCheck = async () => {

  try {
    const response = await axios.post(burp0_url, burp0_data, {
      headers: burp0_headers,
      withCredentials: true,
      params: burp0_cookies,
    });

    const result = response.data;
      
      
    // Process and format your data here

    return { result };
  } catch (error) {
    throw error;
  }
 };}

export default makePlagiarismCheck;