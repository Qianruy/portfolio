import React, { Component } from "react";
import PersonImage from "/Users/qianru/Documents/React-Portfolio/src/components/assets/person.png";

class Card extends Component {
	render() {
		return (
			<a class="ui card" href={this.props.rel} target="_blank" style={{background:"#e6f1ff"}}>
				<div class="content">
					<div class="header">{this.props.header}</div>
					<div class="meta">
					<span class="category">{this.props.category}</span>
					</div>
					<div class="description">
					<p>{this.props.description}</p>
					</div>
				</div>
				<div class="extra content">
					<div class="right floated author">
					<img class="ui avatar image" src={ PersonImage }/> Qianru
					</div>
				</div>
			</a>
		);
	}
}
export default Card;