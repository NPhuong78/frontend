import { render } from "@testing-library/react"
import "./footer.css"

export default function Footer(){
    return(
        <div class="footer-basic">
            <footer>
                <div class="social">
                    <a href="https://www.facebook.com/fu.jsclub">
                        <i class="fab fa-facebook-square fa-3x"></i>
                    </a>
                    <a href="https://www.facebook.com/fu.jsclub">
                        <i class="fab fa-instagram-square fa-3x"></i>
                    </a>
                    <a href="https://www.facebook.com/fu.jsclub">
                        <i class="fab fa-twitter-square fa-3x"></i>
                    </a>
                    <p class="copyright">📧 Email: jsclub.fpt@gmail.com <br/> Contact: Lê Thanh Bình (0981576745)</p>   

                </div>
                <p class="copyright">CTV BCM TEAM 4 © 2022</p>                
            </footer>
        </div>
    )
}