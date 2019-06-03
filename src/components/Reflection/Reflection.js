import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

export default class Reflection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  async componentDidMount() {
    //super.componentDidMount();

    var result = await axios({
      method: 'get',
      url: 'https://api.stlukeirving.org/reflection',
    });

    console.log(result);

    this.setState(a => ({ result: result.data }));
  }

  render() {
    return this.state.result && 
      <iframe src={"https://widget.spreaker.com/player?episode_id="+this.state.result.episode_id+"&theme=light&autoplay=false&playlist=false&cover_image_url="+this.state.result.episode_original_image_url} width="100%" height="400px" frameborder="0" />
    || null;
  }
};
