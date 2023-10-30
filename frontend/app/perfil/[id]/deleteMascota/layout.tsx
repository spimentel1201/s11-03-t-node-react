import SuccessDeleted from "./mascotaSuccessDeleted/page";

export default function deleteLayout({children}:{children:React.ReactNode}){
    return (
        <div><SuccessDeleted />{children}</div>
    )
}