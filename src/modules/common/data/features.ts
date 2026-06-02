import {
  VizBars,
  VizDays,
  VizNodes,
  VizRadar,
  VizRoute,
  VizWave,
} from '@/modules/common/feature-viz'
import {
  BoltIcon,
  CoinIcon,
  HeadsetIcon,
  PlugIcon,
  PulseIcon,
  RouteIcon,
} from '@/modules/common/icons'
import type { Feature } from '@/modules/common/types'

export const features: Feature[] = [
  {
    Viz: VizRadar,
    icon: BoltIcon,
    num: '01',
    title: 'Despacho Programados',
    body: 'Envio programado dos pedidos de forma que a agilidade e precisão matem a sua fome.',
    stat: 'Alocação rápida',
  },
  {
    Viz: VizWave,
    icon: PulseIcon,
    num: '02',
    title: 'Monitoramento em tempo real',
    body: 'Acompanhe cada entrega da saída à chegada. Transparência total para você e para o cliente final.',
    stat: 'eventos ao vivo',
  },
  {
    Viz: VizRoute,
    icon: RouteIcon,
    num: '03',
    title: 'Definição de rotas',
    body: 'O algoritmo escolhe as melhores rotas automaticamente. Economia de tempo e dinheiro em cada viagem.',
    stat: '−18% km rodado',
  },
  {
    Viz: VizDays,
    icon: HeadsetIcon,
    num: '04',
    title: 'Suporte 7 dias / semana',
    body: 'Atendimento especializado todos os dias da semana. A sua operação nunca para — a nossa também não.',
    stat: 'online · 24/7',
  },
  {
    Viz: VizNodes,
    icon: PlugIcon,
    num: '05',
    title: 'Integrações',
    body: 'Uma só plataforma integrada aos maiores cardápios digitais e sistemas de PDV do mercado.',
    stat: '+15 conectores',
  },
  {
    Viz: VizBars,
    icon: CoinIcon,
    num: '06',
    title: 'Financeiro integrado',
    body: 'Faturamento em tempo real, conferência simplificada e pagamentos centralizados em um só lugar.',
    stat: 'fechamento semanal',
  },
]
