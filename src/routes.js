import Home from './components/home/index'
import Agent from './components/agent/index'
import Callcenter from './components/callcenter/index'
import Contacts from './components/contacts/index'
import Form from './components/form/index'
import History from './components/history/index'
import Notice from './components/notice/index'
import Quickreply from './components/quickreply/index'
import Softphone from './components/softphone/index'
import SystemOutbound from './components/softphone/systemOutbound/index'
import Tasks from './components/tasks/index'
import Topiclist from './components/topiclist/index'
import Visit from './components/visit/index'
import WorkAdmin from './components/work/admin/index'
import WorkAgent from './components/work/agent/index'
import Xiaoe from './components/xiaoe/index'
import Login from './components/user/login'

export const routes = [ 
    {path : '/',component : Home},
    {path : '/agent',component : Agent},
    {path : '/callcenter',component : Callcenter},
    {path : '/contacts',component : Contacts},
    {path : '/form',component : Form},
    {path : '/history',component : History},
    {path : '/notice',component : Notice},
    {path : '/quickreply',component : Quickreply},
    {path : '/softphone',component : Softphone},
    {path : '/tasks',component : Tasks},
    {path : '/topiclist',component : Topiclist},
    {path : '/visit',component : Visit},
    {path : '/work/admin',component : WorkAdmin},
    {path : '/work/agent',component : WorkAgent},
    {path : '/systemOutbound',component : SystemOutbound},
    {path : '/xiaoe',component : Xiaoe},
    {path : '/login',component : Login}
  ]