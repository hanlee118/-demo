import { DayPlan } from '../data/itinerary';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Utensils, Info, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

interface DayPlanListProps {
  itinerary: DayPlan[];
}

export default function DayPlanList({ itinerary }: DayPlanListProps) {
  const [expandedDay, setExpandedDay] = useState<number>(1);

  // Auto-expand first day when itinerary changes
  useEffect(() => {
    setExpandedDay(1);
  }, [itinerary]);

  return (
    <div className="space-y-6">
      {itinerary.map((day) => (
        <section 
          key={day.day}
          id={`day-${day.day}`}
          className={cn(
            "p-6 rounded-2xl transition-all duration-500",
            expandedDay === day.day 
              ? "bg-white shadow-xl shadow-brand-primary/5 border-l-4 border-l-brand-primary" 
              : "bg-white/50 border-l-4 border-l-transparent hover:bg-white"
          )}
        >
          <button 
            onClick={() => setExpandedDay(day.day)}
            className="w-full text-left flex items-start justify-between group"
          >
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-serif font-black text-brand-primary/20 leading-none">0{day.day}</span>
                <div className="w-px h-full bg-brand-primary/10 my-2" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-brand-secondary font-mono text-xs uppercase tracking-widest mb-1">
                  <Calendar className="w-3 h-3" />
                  {day.date}
                </div>
                <h2 className="text-2xl font-serif font-black text-brand-primary mb-2 group-hover:text-brand-secondary transition-colors">
                  {day.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                  {day.summary}
                </p>
              </div>
            </div>
            <div className={cn(
              "p-2 rounded-full border border-brand-primary/20 transition-transform duration-300",
              expandedDay === day.day ? "rotate-180 bg-brand-primary text-white" : "rotate-0"
            )}>
              <ArrowDown className="w-4 h-4" />
            </div>
          </button>

          <AnimatePresence>
            {expandedDay === day.day && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-8 space-y-8">
                  {/* Spots */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {day.spots.map((spot, idx) => (
                      <div key={idx} className="group relative overflow-hidden rounded-xl bg-brand-earth/50 border border-brand-primary/5 hover:border-brand-primary/20 transition-all">
                        {spot.image && (
                          <div className="aspect-[4/3] overflow-hidden">
                            <img 
                              src={spot.image} 
                              alt={spot.name} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                             <span className={cn(
                               "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                               spot.type === 'attraction' ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                             )}>
                               {spot.time || spot.type}
                             </span>
                          </div>
                          <h4 className="font-serif font-bold text-lg mb-1">{spot.name}</h4>
                          <p className="text-xs text-gray-600 line-clamp-2">{spot.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-brand-primary/5">
                    {/* Food */}
                    {day.food && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-brand-primary">
                          <Utensils className="w-4 h-4" />
                          必尝美食
                        </div>
                        <ul className="flex flex-wrap gap-2">
                          {day.food.map((f, i) => (
                            <li key={i} className="px-3 py-1 bg-white border border-brand-primary/10 rounded-full text-xs font-medium">
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tips */}
                    {day.tips && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-brand-primary">
                          <Info className="w-4 h-4" />
                          旅行贴士
                        </div>
                        <div className="space-y-2">
                          {day.tips.map((t, i) => (
                            <div key={i} className="flex gap-2 text-xs text-brand-secondary/80 bg-brand-secondary/5 p-2 rounded-lg italic">
                              <span className="text-brand-primary font-bold">!</span>
                              {t}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      ))}
    </div>
  );
}
