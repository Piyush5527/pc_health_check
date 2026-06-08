import { useKeycloak } from "@react-keycloak/web";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import AppSidebar from "./components/ui/app-sidebar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRouter";

function App() {
  const { initialized } = useKeycloak();
  if (!initialized) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppSidebar />
        <main className="p-4">
          <SidebarTrigger />
          <AppRoutes />
        </main>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
