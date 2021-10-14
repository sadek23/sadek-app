import React, { Component } from 'react';

export default class Services extends Component {

  static contactUs(data,callBack){
    fetch(``,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((result) => {
          callBack(result);
        },
        (error) => {
          callBack(error);
        }
   )
}

}