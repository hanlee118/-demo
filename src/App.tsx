import { motion } from 'motion/react';
import { Wind, Map as MapIcon, Compass, Anchor, Layers } from 'lucide-react';
import { useState } from 'react';
import TravelMap from './components/Map';
import DayPlanList from './components/DayDetails';
import { planA, planB } from './data/itinerary';
import { cn } from './lib/utils';

export default function App() {
  const [activePlan, setActivePlan] = useState<'A' | 'B'>('A');
  const currentItinerary = activePlan === 'A' ? planA : planB;

  return (
    <div className="min-h-screen bg-brand-earth selection:bg-brand-primary/10">
      {/* Header / Hero */}
      <header className="relative bg-brand-primary py-12 md:py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-brand-secondary text-brand-earth text-[10px] font-black uppercase tracking-[0.2em] rounded">五一特别定制</span>
              <div className="h-px w-12 bg-white/30" />
              <span className="text-white/60 text-[10px] font-mono tracking-widest uppercase italic">The Zen Journey</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-6">
              浙闽山海 <br />
              <span className="text-brand-secondary italic">禅意行</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl font-light mb-8 max-w-md leading-relaxed">
              从杭州至福鼎、霞浦。寻访古刹禅心，捕捉滩涂光影。
            </p>
            
            {/* Plan Selector */}
            <div className="flex p-1 bg-white/10 rounded-full w-fit mb-8 border border-white/20">
              <button 
                onClick={() => setActivePlan('A')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-black transition-all",
                  activePlan === 'A' ? "bg-white text-brand-primary" : "text-white/60 hover:text-white"
                )}
              >
                计划A：霞浦光影
              </button>
              <button 
                onClick={() => setActivePlan('B')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-black transition-all",
                  activePlan === 'B' ? "bg-white text-brand-primary" : "text-white/60 hover:text-white"
                )}
              >
                计划B：山海草甸
              </button>
            </div>

            <div className="flex gap-4">
              <a href="#itinerary" className="px-8 py-4 bg-white text-brand-primary font-bold rounded-full hover:bg-brand-secondary hover:text-white transition-all transform hover:-translate-y-1 block text-center">
                查看具体行程
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:w-1/2 relative pr-8 pb-8"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1000" 
                alt="Fujian Scenery"
                className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 text-white/80 text-xs mb-3 font-mono">
                  <Compass className="w-4 h-4" />
                  宁德 · 福鼎 · 霞浦 · 嵛山岛
                </div>
                <h3 className="text-white text-3xl font-black">
                  {activePlan === 'A' ? '海上仙都 · 太姥风华' : '海上草原 · 嵛山岛记'}
                </h3>
              </div>
            </div>
            
            {/* Design accents */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-brand-secondary/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-12 w-24 h-24 bg-white/10 rounded-full blur-xl" />
            
            <div className="absolute -right-4 bottom-12 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce hover:animate-none cursor-default">
              <div className="bg-brand-secondary/10 p-2 rounded-lg">
                <Layers className="w-6 h-6 text-brand-secondary" />
              </div>
              <div className="pr-4">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">当前选择</div>
                <div className="text-sm font-black">周边的路线 (计划{activePlan})</div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="itinerary" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Timeline */}
          <div className="lg:w-7/12">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4 flex items-center gap-4 text-brand-primary">
                 {activePlan === 'A' ? '计划A：霞浦光影深度游' : '计划B：山海草甸探索游'}
                <div className="h-px flex-1 bg-brand-primary/10 ml-4" />
              </h2>
              <p className="text-gray-500 italic">4月30日晚出发，错峰避堵，深入闽东。</p>
            </div>
            
            <DayPlanList itinerary={currentItinerary} />
            
            {/* Additional Info Section */}
            <section className="mt-20 p-8 rounded-3xl bg-brand-primary text-white space-y-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              
              <h2 className="text-3xl font-black">美食地图 · 福灵鼎味</h2>
              <p className="text-white/60 text-sm max-w-xl">
                食在福鼎，不仅在于那一碗肉片，更在那山海间传承的古法风味。霞浦更是中国海鲜之都。
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['福鼎肉片', '蜜汁鸡翅', '霞浦海鲜', '闽南糊', '珍珠鲍', '槟榔芋泥', '剑蛏', '太姥山茶'].map((item) => (
                  <div key={item} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center group hover:bg-white hover:text-brand-primary transition-all cursor-default">
                    <span className="text-sm font-black">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                  <Anchor className="w-5 h-5 text-brand-secondary" />
                  特别攻略
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl">
                    <h4 className="text-sm font-black mb-2 flex items-center gap-2">🏮 寺庙礼仪</h4>
                    <p className="text-xs text-white/60 leading-relaxed">访问平兴寺务必着装得体（不露肩/膝），保持安静。此处为律宗道场，戒律庄严。</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl">
                    <h4 className="text-sm font-black mb-2 flex items-center gap-2">📸 摄影时机</h4>
                    <p className="text-xs text-white/60 leading-relaxed">北岐日出：4:50起；东壁日落：17:20起；杨家溪晨雾：7:00-8:30最佳。</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          {/* Right: Map (Sticky on Desktop) */}
          <div className="lg:w-5/12">
            <div className="sticky top-12">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black mb-1">互动航迹</h2>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Interactive Navigation</p>
                </div>
                <div className="flex gap-2">
                   <div className="w-8 h-8 rounded-full bg-white border border-brand-primary/10 flex items-center justify-center">
                     <MapIcon className="w-4 h-4 text-brand-primary" />
                   </div>
                </div>
              </div>
              
              <div className="h-[500px] lg:h-[calc(100vh-180px)]">
                <TravelMap itinerary={currentItinerary} />
              </div>
              
              <div className="mt-6 p-6 rounded-2xl bg-white border border-brand-primary/5 shadow-sm">
                <h4 className="text-sm font-bold mb-3">实时路况提示</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-brand-secondary bg-brand-secondary/5 p-3 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    <span>沈海高速G15：5月1日预计车流极大，建议错峰。</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-brand-secondary bg-brand-secondary/5 p-3 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>东海1号公路：路况优良，适合慢行拍照。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-primary text-white/30 py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
             <div className="text-xl font-serif font-black text-white/80 tracking-tighter mb-1">ZEN TRIP.</div>
             <p className="text-[10px] uppercase font-mono tracking-[0.4em]">Hangzhou to Fujian · 2026</p>
          </div>
          
          <div className="text-[10px] text-center md:text-right max-w-sm">
            本行程由 AI 助手根据您的偏好（古刹、人文、小众）深度定制。
            祝您在这个五一假期，收获满身禅意，步入静谧山海。
          </div>
        </div>
      </footer>
    </div>
  );
}

