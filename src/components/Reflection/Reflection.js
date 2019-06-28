import React from 'react';
import axios from 'axios';

export default class Reflection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  async componentDidMount() {
    var result = await axios({
      method: 'get',
      url: 'https://api.stlukeirving.org/reflection',
    });

    this.setState(a => ({ result: result.data }));
  }

  render() {
    return (this.state.result && 
      <iframe title="Daily Reflection" className="reflection" src={"https://widget.spreaker.com/player?episode_id="+this.state.result.episode_id+"&theme=light&autoplay=false&playlist=false&cover_image_url="+this.state.result.episode_original_image_url} width="100%" height="400px" frameBorder="0" />)
    || null;
  }
};
