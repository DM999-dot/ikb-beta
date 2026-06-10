const ModuleMap = {
    1: { hub: 'topic-module-1-gateway' },
    2: { hub: 'topic-module-2-gateway' },
    3: { hub: 'topic-module-3-gateway' },
    4: { hub: 'topic-module-4-gateway' }
};

// Helper to find which module a lesson belongs to
function getModuleFromLesson(lessonId) {
    if (lessonId.includes('world-cup') || lessonId.includes('league')) return 2;
    if (lessonId.includes('tactician') || lessonId.includes('modern')) return 3;
    return 1;
}