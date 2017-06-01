import React, { Component } from 'react';
import { Col, Flex } from 'jsxstyle';

import UnselectedButton from './UnselectedButton.js';
import SelectedButton from './SelectedButton.js';
import RemoveButton from './RemoveButton.js';

import { connect } from 'react-redux';

import * as actions from '../actions';
import * as colors from '../colors.js';


const wrapperStyles = {
  padding: 20,
  paddingBottom:10,
  width: 250,
  height: 340,
  marginRight: '2vw',
  marginLeft: '2vw'
};


class ProductCard extends Component{
  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = { hover: false };
  }

  handleButtonClick(){
    this.props.selectAction(this.props.title);
  }

  setHoverState(bool){
    this.setState({hover: bool});
  }

  displayButton(){
    if(this.props.selected.includes(this.props.title)){
      if(this.state.hover){
        return <RemoveButton onClick={this.handleButtonClick}
                  onMouseLeave={this.setHoverState.bind(this, false)}
                />
      }
      return (<SelectedButton onClick={this.handleButtonClick}
              onMouseEnter={this.setHoverState.bind(this, true)}
              />);
    }
    else{
      return <UnselectedButton onClick={this.handleButtonClick}/>
    }
  }

  render(){
    const { img, backgroundColor, title, subText, selected } = this.props;
    return(
      <Col alignItems='center' border={'5px solid ' + ((selected.includes(title)) ? colors.selected_button : colors.primary_text )} style={{...wrapperStyles, backgroundColor: backgroundColor}}>
        <Col alignItems='center'>
          <img src={img} alt='' style={{ marginTop: 15, height: 95 }}/>
        </Col>

        <Flex flexDirection='column' alignItems='center' justifyContent='flex-start' style={{ marginTop: 25, height: 200}}>
          <h3 style={{color: colors.card_title}}>{title}</h3>
          <p style={{color: colors.card_subtext, fontSize: '0.9em', margin: 0, padding: 0}}>{subText}</p>
        </Flex>
        {this.displayButton()}
      </Col>
    );
  }
}


const mapStateToProps = (state)=>{
  return{
    selected: state.selected
  };
};

export default connect(mapStateToProps, actions)(ProductCard);
