import utilStyles from '../styles/utils.module.css'
import ImglessLayout from '../components/imglesslayout'
export default function Custom404 () {
    return (
        <ImglessLayout>
            <h1 className={utilStyles.headingXl}>404 - Page Not Found</h1> 
        </ImglessLayout>
    );
}