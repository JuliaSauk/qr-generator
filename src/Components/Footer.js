import React from "react";

export default function Footer() {
  return (
    <div style={{position: 'absolute', bottom: 0, textAlign: 'center', left: 0, right: 0}}>
      <footer class="footer">
			<div class="footer-right">

				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-github"></i></a>

			</div>

			<div class="footer-left">

				<p>Julia Sauk &copy; 2020</p>
			</div>

		</footer>
    </div>
  );
}