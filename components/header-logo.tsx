import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
    return (
        <Link href='/'> 
        <div className="items-center hidden lg:flex">
            <Image src='/logoipsum-299.svg' alt='logo' height={28} width={28}/>
            <p className="font-semibold text-white text-lg ml-2.5">lcvssc.ai | finance</p>
    </div>
    </Link> );
}
 
export default HeaderLogo;