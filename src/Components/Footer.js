import React from "react";

export default function Footer() {
  return (
    <div class="footer" style={{position: 'absolute', bottom: 0, textAlign: 'center', left: 0, right: 0}}>
			<div class="footer-right">
				<a href="https://github.com/JuliaSauk"><img src="github.png" title="GitHub"/></a>
				<a href="https://www.linkedin.com/in/julia-sauk/"><img src="linkedin.png" title="LinkedIn"/></a>
				<a href="https://www.facebook.com/profile.php?id=100007620044897"><img src="facebook.png" title="Facebook"/></a>
			</div>
			<div class="footer-left">
				<p>Julia Sauk &copy; 2020</p>
			</div>
    </div>
  );
}