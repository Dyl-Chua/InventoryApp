const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    axios.get('https://api.sosinventory.com/api/v2/shipment').then(response => {
      console.log(response);
    });
  };

  const sendShipment = () => {
    var number = document.getElementById("number").value;
    var customer = document.getElementById("customer").value;
    var itemname = document.getElementById("itemname").value;
    var quantity = document.getElementById("quantity").value;  
    var itemname2 = document.getElementById("itemname2").value;
    var quantity2 = document.getElementById("quantity2").value;
   
    axios
      .post(
        'https://api.sosinventory.com/api/v2/shipment',
        {
            "starred": 0,
            "syncToken": 0,
            "number": number,
            "date": "2022-01-12T17:00:00",
            "customer": {
                "name": customer
            },
            "lines": [ {
                "lineNumber": 1,
                    "item": {
                        "name": itemname,
                     "quantity": quantity
                    },
                    
            },
            {
            "lineNumber": 2,
            "item": {
                "name": itemname2,
             "quantity": quantity2
            }
          }]
        },
        {
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Host': 'api.sosinventory.com', 
          'Authorization': 'Bearer _p_C1C_IAVRdCyGAJxYsZ2gD2NaJ5h3pwWTre23t9olqwi3SpS45HATP3bGf5Rup4XbC2Lg8caOrW9h2pMxm-WPku0N0HjU5Fn-NGyY6VgqgKRFKZe6zoyAsUmLicaSBFregGRZF9uvk5hehizKLs2B9FhORYXTFMmz7LAW6yW-IVuttirLHgek-T4VScEtheaHKyKx0Q7rgjuDsX6EL7L2MCI1ybMIjqVJUDYOAx5-d5WCdwkEyWqhZ-pWIhYEkAmf8xb8ZiXrQWKX5IsMqxIJrttUWFPh3y25WoPDPKXO1bxOI'
          }
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err, err.response);
      });
  };

  
getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendShipment);
