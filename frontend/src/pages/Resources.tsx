import { useState, useEffect } from 'react';
import { Search, Filter, Star, Download, BookOpen } from 'lucide-react';
import HexagonCard from '../components/HexagonCard';

type Resource = {
    id: number;
    title: string;
    subject: string;
    description?: string;
    category: string;
    semester: number;
    tags: string[];
    file_url: string;
    is_recommended?: boolean;
};

const staticResources: Resource[] = [
    {
        id: 1,
        title: 'Data Structures Syllabus',
        subject: 'Data Structures',
        description: 'Official syllabus for Data Structures.',
        category: 'Syllabus',
        semester: 3,
        tags: ['syllabus', 'data structures'],
        file_url: '#',
        is_recommended: true,
    },
    {
        id: 2,
        title: 'OOP Lab Manual',
        subject: 'Object Oriented Programming',
        description: 'Lab manual for OOP practicals.',
        category: 'Lab Manual',
        semester: 2,
        tags: ['lab', 'oop'],
        file_url: '#',
        is_recommended: false,
    },
    {
        id: 3,
        title: 'Project Template',
        subject: 'Software Engineering',
        description: 'Template for semester projects.',
        category: 'Project Template',
        semester: 5,
        tags: ['template', 'project'],
        file_url: '#',
        is_recommended: true,
    },
    // Add more static resources as needed
];

export default function Resources() {
    const [resources] = useState<Resource[]>(staticResources);
    const [filteredResources, setFilteredResources] = useState<Resource[]>(staticResources);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSemester, setSelectedSemester] = useState('all');

    // Filtering logic
    useEffect(() => {
        let filtered = resources;

        if (searchQuery) {
            filtered = filtered.filter(
                (r) =>
                    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    r.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    r.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        if (selectedCategory !== 'all') {
            filtered = filtered.filter((r) => r.category === selectedCategory);
        }

        if (selectedSemester !== 'all') {
            filtered = filtered.filter((r) => r.semester === parseInt(selectedSemester));
        }

        setFilteredResources(filtered);
    }, [searchQuery, selectedCategory, selectedSemester, resources]);

    const categories = [
        'Syllabus',
        'Notes',
        'Lab Manual',
        'Project Template',
        'Code Snippets',
        'Tools & Setup',
    ];

    return (
        <div className="min-h-screen bg-[#F5F7FA] pt-20 px-4 pb-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-[#0A1A2F] mb-4">Resources</h1>
                    <p className="text-xl text-[#1E1E1E]/70">
                        Everything you need for academic and technical success
                    </p>
                </div>

                <div className="mb-8 space-y-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0057B8]/50 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search resources by title, subject, or tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-[#3AE9F3]/30 focus:border-[#0057B8] focus:outline-none bg-white/90 backdrop-blur-sm transition-all"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="flex items-center gap-2 text-sm font-medium text-[#0A1A2F] mb-2">
                                <Filter className="w-4 h-4" />
                                Category
                            </label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border-2 border-[#3AE9F3]/30 focus:border-[#0057B8] focus:outline-none bg-white/90 backdrop-blur-sm transition-all"
                            >
                                <option value="all">All Categories</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex-1">
                            <label className="flex items-center gap-2 text-sm font-medium text-[#0A1A2F] mb-2">
                                <BookOpen className="w-4 h-4" />
                                Semester
                            </label>
                            <select
                                value={selectedSemester}
                                onChange={(e) => setSelectedSemester(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border-2 border-[#3AE9F3]/30 focus:border-[#0057B8] focus:outline-none bg-white/90 backdrop-blur-sm transition-all"
                            >
                                <option value="all">All Semesters</option>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                                    <option key={sem} value={sem}>
                                        Semester {sem}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mb-6 flex items-center gap-2 text-[#0A1A2F]">
                    <p className="text-sm">
                        Showing <span className="font-bold text-[#0057B8]">{filteredResources.length}</span> resources
                    </p>
                    {filteredResources.some((r) => r.is_recommended) && (
                        <div className="ml-auto flex items-center gap-2 text-sm">
                            <Star className="w-4 h-4 text-[#3AE9F3] fill-[#3AE9F3]" />
                            <span className="text-[#0057B8]">Recommended by seniors</span>
                        </div>
                    )}
                </div>

                {filteredResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredResources.map((resource) => (
                            <HexagonCard key={resource.id}>
                                <div className="flex items-start justify-between mb-3">
                                    <span className="px-3 py-1 bg-[#0057B8]/10 text-[#0057B8] text-xs rounded-full font-medium">
                                        Semester {resource.semester}
                                    </span>
                                    {resource.is_recommended && (
                                        <Star className="w-5 h-5 text-[#3AE9F3] fill-[#3AE9F3]" />
                                    )}
                                </div>

                                <h3 className="text-lg font-bold text-[#0A1A2F] mb-2">{resource.title}</h3>

                                {resource.subject && (
                                    <p className="text-sm text-[#0057B8] font-medium mb-2">{resource.subject}</p>
                                )}

                                {resource.description && (
                                    <p className="text-sm text-[#1E1E1E]/70 mb-3 line-clamp-2">
                                        {resource.description}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-2 py-1 bg-[#3AE9F3]/20 text-[#0057B8] text-xs rounded">
                                        {resource.category}
                                    </span>
                                    {resource.tags.slice(0, 2).map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-[#0A1A2F]/10 text-[#0A1A2F] text-xs rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={resource.file_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0057B8] text-white rounded-lg hover:shadow-[0_0_20px_rgba(58,233,243,0.5)] transition-all duration-300"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Access Resource</span>
                                </a>
                            </HexagonCard>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#3AE9F3]/20 flex items-center justify-center">
                            <BookOpen className="w-10 h-10 text-[#0057B8]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0A1A2F] mb-2">No resources found</h3>
                        <p className="text-[#1E1E1E]/70">
                            {searchQuery || selectedCategory !== 'all' || selectedSemester !== 'all'
                                ? 'Try adjusting your filters or search query'
                                : 'Resources will be added soon'}
                        </p>
                    </div>
                )}

                <div className="mt-12 p-8 bg-gradient-to-br from-[#0057B8]/10 to-[#3AE9F3]/10 rounded-2xl border border-[#3AE9F3]/30">
                    <h3 className="text-2xl font-bold text-[#0A1A2F] mb-4">Resource Categories</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category) => {
                            const count = resources.filter((r) => r.category === category).length;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`p-4 rounded-lg transition-all duration-300 ${
                                        selectedCategory === category
                                            ? 'bg-[#0057B8] text-white shadow-lg'
                                            : 'bg-white/70 hover:bg-white text-[#0A1A2F]'
                                    }`}
                                >
                                    <p className="font-bold text-lg">{count}</p>
                                    <p className="text-sm">{category}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
