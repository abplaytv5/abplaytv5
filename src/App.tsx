import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
        <h1 style={{ color: 'black', fontSize: '2rem' }}>Abplay TV Loading...</h1>
        <p style={{ color: 'black' }}>If you see this, React is working!</p>
        <Home />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
