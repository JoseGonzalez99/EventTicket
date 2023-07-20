// component
import SvgColor from '../../../components/svg-color';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: <Iconify icon={'carbon:analytics'} color="#1877F2" width={32} />,
  },
  {
    title: 'qreader',
    path: '/dashboard/qreader',
    icon: <Iconify icon={'carbon:qr-code'} color="#1877F2" width={32} />,
  },
  {
    title: 'event',
    path: '/dashboard/events',
    icon: <Iconify icon={'carbon:event'} color="#1877F2" width={32} />,
  },
  {
    title: 'ticket',
    path: '/dashboard/tickets',
    icon: <Iconify icon={'carbon:ticket'} color="#1877F2" width={32} />,
  },  {
    title: 'user',
    path: '/dashboard/user',
    icon: <Iconify icon={'carbon:user'} color="#1877F2" width={32} />,

  },
  {
    title: 'product',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
