interface RoutesType {
  main: {
    path: string
    name: string
  }
  activity: {
    path: string
    name: string
  }
  administration: {
    path: string
    name: string
  }
  clients: {
    path: string
    name: string
  }
  professionals: {
    path: string
    name: string
  }
  profile: {
    path: string
    name: string
  }
  login: {
    path: string
    name: string
  }
}

export const ROUTES: RoutesType = {
  main: {
    path: '/',
    name: 'Principal'
  },
  activity: {
    path: '/activity',
    name: 'Actividad'
  },
  clients: {
    path: '/clients',
    name: 'Clientes'
  },
  professionals: {
    path: '/professionals',
    name: 'Profesionales'
  },
  administration: {
    path: '/administration',
    name: 'Administración'
  },
  profile: {
    path: '/profile',
    name: 'Perfil'
  },
  login: {
    path: '/login',
    name: 'Iniciar Sesión'
  }
}
