
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import InputPage from './inputpage/page';
export default function N8nForm() {
  // const [email, setEmail] = useState('');
  // const [name, setEname] = useState('');


  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const response = await fetch('/api/v1', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ userEmail: email, userName: name }),
  //   });

  //   if (response.ok) {
  //     alert('Data sent to n8n!');
  //   }
  // };

  return (
    <InputPage />
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //     placeholder="Enter email"
    //   />
    //   {/* <input
    //     type="name"
    //     value={name}
    //     onChange={(e) => setEname(e.target.value)}
    //     placeholder="Enter name"
    //   /> */}
    //   <Link href="/inputpage">
    //       <Button variant="outline">
    //         Create Rough Idea
    //       </Button>
    //     </Link>
    //   <button type="submit">Send to n8n</button>
    // </form>
  );
}