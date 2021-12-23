const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
    axios.get('https://api.sosinventory.com/api/v2/shipment').then(response => {
      console.log(response);
    });
  };


  const sendData = () => {
    axios
      .post(
        'https://api.sosinventory.com/api/v2/shipment',
        {
            "starred": 0,
            "syncToken": 0,
            "number": [number],
            "date": "2021-12-11T04:00:00",
            "customer": {
                "name": "Syahmi"
            },
            "lines": [ {
                "lineNumber": 1,
                    "item": {
                        "name": "1311TK004",
                     "quantity": 161.00000
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
postBtn.addEventListener('click', sendData);