import Header from "@/components/header";

type Props = {
    children: React.ReactNode;
}


const DashboardLayout = ({children}: Props) => {
    return ( <>
    <Header/>
    <main className="px-4 py-8 lg:px-14">
        <div className="max-w-screen-2xl mx-auto">
        {children}

        </div>
        </main>
    </> );
}
 
export default DashboardLayout;