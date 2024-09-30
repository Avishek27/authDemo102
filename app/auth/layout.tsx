

interface AuthLayoutProps{
    children: React.ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
    return (
      <div className="bg-slate-500 flex flex-col items-center justify-center h-full">
        
        {children}
      </div>
    )
}

export default AuthLayout;