package com.simbirsoft.rn.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.simbirsoft.rn.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class GroupsTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Groups.class);
        Groups groups1 = new Groups();
        groups1.setId(1L);
        Groups groups2 = new Groups();
        groups2.setId(groups1.getId());
        assertThat(groups1).isEqualTo(groups2);
        groups2.setId(2L);
        assertThat(groups1).isNotEqualTo(groups2);
        groups1.setId(null);
        assertThat(groups1).isNotEqualTo(groups2);
    }
}
