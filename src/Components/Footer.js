import React from "react";

export default function Footer() {
  return (
    <div class="footer" style={{position: 'absolute', bottom: 0, textAlign: 'center', left: 0, right: 0}}>
			<div class="footer-right">
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-github"></i></a>
			</div>
			<div class="footer-left">
				<p>Julia Sauk &copy; 2020</p>
			</div>
    </div>
  );
}