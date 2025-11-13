
import { Route, Routes} from 'react-router'; 
import './App.css';
import { ThemeProvider } from './components/ThemeContext.jsx';
import IndividualBlogPost from './components/blog/IndividualBlogPost.jsx';
import ContactPage from './components/contacts/ContactPage.jsx';
import HomePage from './components/homepage/HomePage.jsx';
import PostList from './components/postList/PostList.jsx';
import CommonLayout from './components/layouts/CommonLayout.jsx';
import BlogPost from './components/blog/BlogPost.jsx';



function App() {

  return (
    <ThemeProvider>
      <Routes>
        <Route element={<CommonLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:post_id" element={<BlogPost />} />
        </Route>
      </Routes>
    
    </ThemeProvider>

  );
}

export default App;
