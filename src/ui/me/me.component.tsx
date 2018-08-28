import * as React from 'react';
import { Link } from 'react-router-dom';

export default class MeComponent extends React.Component<{}, {}> {
	render() {
		return (
			<div className="me-container">
			You can't imagine how often I hear this question. And it's so hard to answer it properly!
			 I have to explain every time that when you think of a country as big as Russia (there are
			  none by the way) you have to remember that with this kind of size, number of climate 
			  & time zones and seasons - it's just different everywhere! So no generalizations please.
			   For example in Saint Petersburg where I come from the weather is almost like in Amsterdam 
			   where I live now. Tiny bit colder in winter and tiny bit warmer in summer.
			<br />
			<br />
			<div className="callout">
			Hm, quite a lot of text ahead, right? If you don't want to read all this (a bit phylosophical) stuff you can go directly to <Link to="/my-projects">my projects</Link> or <Link to="/my-contacts">view my CV</Link>.
			</div>
			Ok, enough about weather. In Russian we don't really have a word for "small talk", instead we say "to talk about weather" as a reference to what people do when they don't really know each other and experience this awkwardness familiar to everyone. So hence my long and awkward introduction.
			<br />
			<br />
			My name is Valery Sizikova and I am a software engineer. I enjoy coming to work every day and prototyping, designing, and coding web applications. That's the best choice I ever made - this activity occupies me for 8 hours a day and I am happy that it's the opposite of boring. I like to dive into the requirements and reasonably question them to get to the bottom of feature purpose and its future use. Understanding of the end goal is very important to me so I always seek for extra information.
			<br />
			<br />
			I enjoy working on creating user interfaces the most but I grew to love being able to implement features on the backend side because it allows me to complete user stories from start to end (then they are like my babies). Also it is a nice brain teaser to switch between IDEs from time to time.
			<br />
			<br />
			My biggest belief is that the ability to learn (as in understand and adopt) is the key. People do things differently. Always. Even if there is a fixed list of best practices somewhere out on the internet. Every new project is different but if you can learn quickly you won't be lost or locked out. As I'm a bit claustrophobic I would hate being locked. So I try to nurture this skill in myself and hope it grows.
			<br />
			<br />
			So let me summarize: prototyping and implementing user interfaces, talking to stakeholders and facilitating knowledge sharing in the team, surviving during even long meetings and being an active participant with ability both to suggest and to listen to others' suggestions - that's what I do. Ah, playing fussball is included.
			<hr />
			</div>
		);
	}
}