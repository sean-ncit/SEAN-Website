import { useState } from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import HexagonCard from '../components/HexagonCard';
import HexagonImage from '../components/HexagonImage';

type Activity = {
    id: number;
    title: string;
    summary: string;
    content?: string;
    category: string;
    date: string;
    image_url?: string;
};

const staticActivities: Activity[] = [
{
    id: 1,
    title: 'Orientation 2082',
    summary: 'Kick off the new academic year with our orientation program designed to welcome and guide incoming students.',
    content: 'Orientation 2082 introduces new students to campus life, academic resources, student clubs, and support services. Join us for sessions, tours, and activities aimed at helping you start your journey with confidence.',
    category: 'Events',
    date: '2025-11-11',
    image_url: '/orien.jpg',
},
{
    id: 2,
    title: 'NCIT Tech Skills Competition',
    summary: 'A platform for students to demonstrate their technical abilities through challenges and problem-solving tasks.',
    content: 'The NCIT Tech Skills Competition features coding challenges, problem-solving rounds, and hands-on technical tasks designed to test and enhance participants’ real-world skills. Open to all students looking to push their limits and showcase their expertise.',
    category: 'Competitions',
    date: '2024-04-20',
    image_url: 'ncit_tech.jpg',
},

    {
        id: 3,
        title: 'Hackathon Winner',
        summary: 'Congratulations to our students for winning the national hackathon.',
        content: 'Our team developed an innovative solution for smart cities.',
        category: 'Achievements',
        date: '2024-03-15',
        image_url: '/hackathon.jpg',
    },
    {
        id: 4,
        title: 'Software Club Meetup',
        summary: 'Monthly meetup for robotics enthusiasts.',
        content: 'Discuss new projects and collaborate with club members.',
        category: 'Club Activities',
        date: '2025-10-01',
        image_url: '/meetup.jpg',
    },
    {
        id: 5,
        title: 'Semester Announcement',
        summary: 'Important announcement regarding the upcoming semester.',
        content: 'Please check your emails for registration details.',
        category: 'Announcements',
        date: '2024-10-25',
        image_url: 'semester.jpg',
    },
    {
        id: 6,
        title: 'Coding Competition',
        summary: 'Participate in our inter-college coding competition.',
        content: 'Showcase your coding skills and win exciting prizes.',
        category: 'Competitions',
        date: '2025-05-04',
        image_url: 'ccompi.jpg',
    },
];

export default function Activities() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        'Events',
        'Workshops',
        'Achievements',
        'Club Activities',
        'Announcements',
        'Competitions',
    ];

    const filteredActivities =
        selectedCategory === 'all'
            ? staticActivities
            : staticActivities.filter((a) => a.category === selectedCategory);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="min-h-screen bg-[#F5F7FA] pt-20 px-4 pb-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-[#0A1A2F] mb-4">Activities & Events</h1>
                    <p className="text-xl text-[#1E1E1E]/70">
                        Stay updated with our latest happenings and achievements
                    </p>
                </div>

                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Tag className="w-5 h-5 text-[#0057B8]" />
                        <span className="font-medium text-[#0A1A2F]">Filter by Category</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                                selectedCategory === 'all'
                                    ? 'bg-[#0057B8] text-white shadow-[0_0_15px_rgba(58,233,243,0.4)]'
                                    : 'bg-white/70 text-[#0A1A2F] hover:bg-white border border-[#3AE9F3]/30'
                            }`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-[#0057B8] text-white shadow-[0_0_15px_rgba(58,233,243,0.4)]'
                                        : 'bg-white/70 text-[#0A1A2F] hover:bg-white border border-[#3AE9F3]/30'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredActivities.length > 0 ? (
                    <>
                        {filteredActivities[0] && (
                            <div className="mb-12">
                                <HexagonCard className="overflow-hidden">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {filteredActivities[0].image_url && (
                                            <HexagonImage
                                                src={filteredActivities[0].image_url}
                                                alt={filteredActivities[0].title}
                                                className="w-full h-80"
                                            />
                                        )}
                                        <div className={filteredActivities[0].image_url ? '' : 'md:col-span-2'}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-4 py-2 bg-[#3AE9F3]/20 text-[#0057B8] text-sm rounded-full font-medium">
                                                    {filteredActivities[0].category}
                                                </span>
                                                <div className="flex items-center gap-2 text-[#1E1E1E]/60 text-sm">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{formatDate(filteredActivities[0].date)}</span>
                                                </div>
                                            </div>
                                            <h2 className="text-3xl font-bold text-[#0A1A2F] mb-4">
                                                {filteredActivities[0].title}
                                            </h2>
                                            <p className="text-[#1E1E1E]/80 leading-relaxed mb-6">
                                                {filteredActivities[0].summary}
                                            </p>
                                            {filteredActivities[0].content && (
                                                <p className="text-[#1E1E1E]/70 leading-relaxed">
                                                    {filteredActivities[0].content}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </HexagonCard>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredActivities.slice(1).map((activity) => (
                                <HexagonCard key={activity.id}>
                                    {activity.image_url && (
                                        <HexagonImage
                                            src={activity.image_url}
                                            alt={activity.title}
                                            className="w-full h-48 mb-4"
                                        />
                                    )}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 bg-[#3AE9F3]/20 text-[#0057B8] text-xs rounded-full font-medium">
                                            {activity.category}
                                        </span>
                                        <div className="flex items-center gap-1 text-[#1E1E1E]/60 text-xs">
                                            <Calendar className="w-3 h-3" />
                                            <span>{formatDate(activity.date)}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0A1A2F] mb-3">{activity.title}</h3>
                                    <p className="text-[#1E1E1E]/70 text-sm mb-4 line-clamp-3">
                                        {activity.summary}
                                    </p>
                                    <button className="flex items-center gap-2 text-[#0057B8] hover:text-[#3AE9F3] font-medium transition-colors group">
                                        <span>Read More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </HexagonCard>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#3AE9F3]/20 flex items-center justify-center">
                            <Calendar className="w-10 h-10 text-[#0057B8]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0A1A2F] mb-2">No activities found</h3>
                        <p className="text-[#1E1E1E]/70">
                            {selectedCategory !== 'all'
                                ? 'No activities in this category yet'
                                : 'Check back soon for upcoming events and activities'}
                        </p>
                    </div>
                )}

                <div className="mt-12 p-8 bg-gradient-to-br from-[#0057B8]/10 to-[#3AE9F3]/10 rounded-2xl border border-[#3AE9F3]/30">
                    <h3 className="text-2xl font-bold text-[#0A1A2F] mb-4">Activity Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category) => {
                            const count = staticActivities.filter((a) => a.category === category).length;
                            return (
                                <div
                                    key={category}
                                    className="p-4 bg-white/70 rounded-lg hover:bg-white transition-colors"
                                >
                                    <p className="font-bold text-2xl text-[#0057B8]">{count}</p>
                                    <p className="text-sm text-[#1E1E1E]/70">{category}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
